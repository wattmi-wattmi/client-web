import {User_Search_Queries_Interface} from "@/modules/browse/browse.types";

export const Tab_Routes = {
    home : {
        path : () => '/' as const,
        icon : "mynaui:home"
    },
    browse : {
        path : () => '/browse' as const,
        path_with_params : (user_search_queries : User_Search_Queries_Interface) => {
            return `/browse?gender=${user_search_queries.gender || ''}&limit=${user_search_queries.limit || ''}&page=${user_search_queries.page || ''}&search=${user_search_queries.search || ''}` as const;
        },
        icon : "iconamoon:search"
    },
    chats : {
        path : () => '/chats' as const,
        icon : "proicons:chat"
    },
    profile : {
        path : () => '/profile' as const,
        icon : "proicons:person"
    }
} as const;
