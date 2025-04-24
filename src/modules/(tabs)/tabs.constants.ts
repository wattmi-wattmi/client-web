export const Tab_Routes = {
    home : {
        path : () => '/' as const,
        icon : "mynaui:home"
    },
    browse : {
        path : () => '/browse' as const,
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
