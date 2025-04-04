import { icons } from "@/constants/icons";

const Routes = {
    home: {
        name: 'home',
        path: '/',
        label: 'Home', 
        icon : icons.home
    }, 
    profile : {
        name: 'profile',
        path: '/profile',
        label: 'Profile',
        icon : icons.profile
    }, 
    browse : {
        name: 'browse',
        path: '/browse',
        label: 'Browse',
        icon : icons.browse
    }
} as const;

export default Routes;