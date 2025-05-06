export const No_Tab_Routes = {
    user_detail : {
        path : (username : string) => `/user/${username}` as const,
    }
}