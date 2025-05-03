import {User_Search_Queries_Interface} from "@/modules/browse/browse.types";

export const Genders = {
    male : 'male',
    female : 'female'
} as const;

export const Env_Configs = {
    api_domain : process.env.NEXT_PUBLIC_API_DOMAIN!
} as const;



export const Api_Routes = {
    auth : {
        me : () => '/api/auth/me' as const,
        login : () => '/api/auth/login' as const,
        register : () => '/api/auth/register' as const,
        logout : () => '/api/auth/logout' as const,
        check_username : () => '/api/auth/check-username' as const,
    },
    users : {
        all_or_search : ({ gender, limit, page, search } : User_Search_Queries_Interface) => {
           return `/api/users?gender=${gender || ''}&limit=${limit || ''}&page=${page || ''}&search=${search || ''}` as const;
        }
    }
} as const;
