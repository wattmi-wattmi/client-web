'use client';
import React from "react";
import {User_Interface} from "@/generals/generals.types";
import {Api_Routes, Env_Configs} from "@/generals/generals.constants";
import {fetch_login, fetch_logout, fetch_register} from "@/auth/auth.lib";
import {Login_Interface, Register_Interface} from "@/auth/auth.types";

interface Auth_Context_Interface {
    me : User_Interface | null;
    set_me : React.Dispatch<React.SetStateAction<User_Interface | null>>;
    loading : boolean;
}

export const Auth_Context = React.createContext<Auth_Context_Interface>({
    me : null, 
    set_me : () => {},
    loading : true,
});

export default function Auth_Context_Provider({ children } : { children: React.ReactNode }) {
    const [me, set_me] = React.useState<User_Interface | null>(null);
    const [loading, set_loading] = React.useState<boolean>(true);
    React.useEffect(() => {
       set_me_from_cookie().catch(e => console.log('error fetching me', e));
    }, []);
    return (
        <Auth_Context.Provider value={{ me , set_me , loading }}>
            {children}
        </Auth_Context.Provider>
    );
    async function set_me_from_cookie() {
        set_loading(true);
        const me = await fetch_me();
        console.log('me', me);
        set_me(me);
        set_loading(false);
    }
}



async function fetch_me() {
    try {
        const response = await fetch(Env_Configs.api_domain + Api_Routes.auth.me(), {
            method : 'POST',
            credentials : 'include'
        });
        if(!response.ok) {
            return null;
        }
        const data = await response.json();
        if(data.success) {
            return data.data as User_Interface;
        } else {
            return null;
        }
    } catch(e) {
        console.log('error fetching me', e);
        return null;
    }
}
