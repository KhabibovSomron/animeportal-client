export interface IUser {
    id: number
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
