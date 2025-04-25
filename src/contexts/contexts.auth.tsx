'use client';
import React from "react";
import {Gender_Type, User_Interface} from "@/generals/generals.types";
import {Api_Routes, Env_Configs} from "@/generals/generals.constants";

interface Auth_Context_Interface {
    me : User_Interface | null;
    set_me : React.Dispatch<React.SetStateAction<User_Interface | null>>;
    loading : boolean;
    login : (data : Login_Interface) => Promise<void>;
    register : (data : Register_Interface) => Promise<void>;
    logout : () => Promise<void>;
}
interface Login_Interface {
    username : string;
    password : string;
}
interface Register_Interface {
    username : string;
    password : string;
    gender : Gender_Type;
}

export const Auth_Context = React.createContext<Auth_Context_Interface>({
    me : null, 
    set_me : () => {},
    loading : true,
    login : async (data : Login_Interface) => { console.log('login', data) },
    register : async (data : Register_Interface) => { console.log('register', data) },
    logout : async () => {},
});

export default function Auth_Context_Provider({ children } : { children: React.ReactNode }) {
    const [me, set_me] = React.useState<User_Interface | null>(null);
    const [loading, set_loading] = React.useState<boolean>(true);
    React.useEffect(() => {
       set_me_from_cookie().catch(e => console.log('error fetching me', e));
    }, []);
    return (
        <Auth_Context.Provider value={{ me , set_me , loading, login, register, logout }}>
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
    async function login({ username, password } : Login_Interface) {
        set_loading(true);
        const me = await fetch_login({ username, password });
        console.log('me', me);
        set_me(me);
        set_loading(false);
    }
    async function register({ username, password, gender } : Register_Interface) {
        set_loading(true);
        const me = await fetch_register({ username, password, gender });
        console.log('me', me);
        set_me(me);
        set_loading(false);
    }
    async function logout() {
        set_loading(true);
        const success = await fetch_logout();
        if(success) {
            set_me(null);
        }
        set_loading(false);
    }
}



async function fetch_login({ username, password } : Login_Interface) {
    try {
        const response = await fetch(Env_Configs.api_domain + Api_Routes.auth.login(), {
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username,
                password
            })
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
       console.log('error logging in', e);
       return null;
    }
}
async function fetch_register({ username, password, gender } : Register_Interface) {
    try {
        const response = await fetch(Env_Configs.api_domain + Api_Routes.auth.register(), {
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username,
                password,
                gender
            })
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
        console.log('error registering', e);
        return null;
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
async function fetch_logout() {
    try {
        const response = await fetch(Env_Configs.api_domain + '/api/auth/logout', {
            method : 'POST',
            credentials : 'include'
        });
        return response.ok
    } catch(e) {
        console.log('error fetching me', e);
        return false;
    }
}
