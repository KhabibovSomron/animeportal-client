import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAuth, IUser } from "../types/UserTypes"


const initialState: IAuth = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: false,
    user: null,
    error: '',
    isLoading: false,
    resetPasswordTrigger: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginLoading(state) {
            state.isLoading = true
        },

        loginSuccess(state, action: PayloadAction<{access: string, refresh: string}>) {
            localStorage.setItem('access', action.payload.access)
            localStorage.setItem('refresh', action.payload.refresh)
            state.access = action.payload.access
            state.refresh = action.payload.refresh
            state.isAuthenticated = true
            state.error = ''
        },

        loginError(state, action: PayloadAction<string>) {
            state.access = null
            state.refresh = null
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            state.user = null
            state.error = action.payload
        },

        userLoading(state) {
            state.isLoading = true
        },
        
        userLoadedSuccess(state, action: PayloadAction<IUser>) {
            state.user = action.payload
            state.error = ''
        },

        userLoadedError(state, action: PayloadAction<string>) {
            state.user = null
            state.error = action.payload
        },

        userAuthenticatedSuccess(state) {
            state.isAuthenticated = true
            state.error = ''
        },

        userAuthenticatedError(state) {
            state.isAuthenticated = false
        },

        userLogOut(state) {
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            state.user = null
            state.access = null
            state.refresh = null
            state.isAuthenticated = false
            state.error = ''           
        },

        passwordResetSuccess(state) {
            state.error = ''
            state.resetPasswordTrigger = !state.resetPasswordTrigger
        },

        passwordResetError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.resetPasswordTrigger = !state.resetPasswordTrigger
        },

        passwordResetConfirmSuccess(state) {
            state.error = ''
        },

        passwordResetConfirmError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },

        signUpSuccess(state) {
            state.isAuthenticated = false
            state.error = ''
        },

        signUpError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },

        signUpActivationSuccess(state) {
            state.error = ''
        },

        signUpActivationError(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    }
})

export default userSlice.reducer;