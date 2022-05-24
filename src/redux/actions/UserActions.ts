import axios from "axios";
import { ACTIVATION_USER_URL, CONFIRM_RESET_PASSWORD_URL, CREATE_USER_URL, LOGIN_USER_URL, RESET_PASSWORD_URL, USER_URL, USER_VERIFY_URL } from "../../endpoints";
import { userSlice } from "../reducers/UserReducer";
import { AppDispatch } from "../store";

export const login = (email:string, password:string) =>async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.loginLoading())
        const res = await axios.post(LOGIN_USER_URL, {
            "email": email,
            "password": password
        })
        dispatch(userSlice.actions.loginSuccess(res.data))
    } catch (err: any) {
        dispatch(userSlice.actions.loginError(err.message))
    }
}

export const loadUser = () =>async (dispatch: AppDispatch) => {
    if (localStorage.getItem('access')) {
        try {
            dispatch(userSlice.actions.userLoading())
            const res = await axios.get(USER_URL, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${localStorage.getItem('access')}`,
                    "Accept": "application/json"
                }
            })
            dispatch(userSlice.actions.userLoadedSuccess(res.data))
        } catch (err: any) {
            dispatch(userSlice.actions.userLoadedError(err.message))
        }
    }
}

export const checkAuthenticated = () =>async (dispatch: AppDispatch) => {
    if (localStorage.getItem('access')) {
        try {
            const res = await axios.post(USER_VERIFY_URL, {
                "token": localStorage.getItem('access')
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            console.log(res.data)
            if (res.data.code !== 'token_not_valid') {
                dispatch(userSlice.actions.userAuthenticatedSuccess())
            } else {
                
                dispatch(userSlice.actions.userAuthenticatedError())
            }
        } catch (err: any) {
            console.log(err)
            dispatch(userSlice.actions.userAuthenticatedError())
        }
    } else {
        dispatch(userSlice.actions.userAuthenticatedError())
    }
}

export const resetPassword = (email: string) =>async (dispatch: AppDispatch) => {
    try {
        const res = await axios.post(RESET_PASSWORD_URL, {
            "email": email
        })
        dispatch(userSlice.actions.passwordResetSuccess())
    } catch (err: any) {
        dispatch(userSlice.actions.passwordResetError(err.message))
    }
}

export const resetPaswordConfirm = (uid: string, token: string, new_password:string, re_new_password:string) =>async (dispatch: AppDispatch) => {
    try {
        const res = await axios.post(CONFIRM_RESET_PASSWORD_URL, {
            "uid": uid,
            "token": token,
            "new_password": new_password,
            "re_new_password": re_new_password
        })
        dispatch(userSlice.actions.passwordResetConfirmSuccess())
    } catch (err: any) {
        dispatch(userSlice.actions.passwordResetConfirmError(err.message))
    }
}

export const signUp = (name: string, email: string, password: string, re_password: string) =>async (dispatch: AppDispatch) => {
    try {
        const res = await axios.post(CREATE_USER_URL, {
            "name": name,
            "email": email,
            "password": password,
            "re_password": re_password
        })
        dispatch(userSlice.actions.signUpSuccess())
    } catch (err: any) {
        dispatch(userSlice.actions.signUpError(err.message))
    }
}

export const signUpActicate = (uid: string, token: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.post(ACTIVATION_USER_URL, {
            "uid": uid,
            "token": token
        })
        dispatch(userSlice.actions.signUpActivationSuccess())
    } catch (err: any) {
        dispatch(userSlice.actions.signUpActivationError(err.message))
    }
}

export const logout = () => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.userLogOut())
}