export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOADED_USER_SUCCESS = "LOADED_USER_SUCCESS"
export const LOADED_USER_FAIL = "LOADED_USER_FAIL" 

export interface IUser {
    email: string,
    name: string
}

export interface IAuth {
    access: string | null,
    refresh: string| null,
    isAuthenticated: boolean,
    user: IUser | null,
    error: string,
    isLoading: boolean,
    resetPasswordTrigger: boolean,
}
