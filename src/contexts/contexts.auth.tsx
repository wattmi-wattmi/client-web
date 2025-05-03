'use client';
import React, { useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import {User_Interface} from "@/generals/generals.types";
import {Api_Routes, Env_Configs} from "@/generals/generals.constants";

interface Auth_Context_Interface {
    me : User_Interface | null;
    set_me : React.Dispatch<React.SetStateAction<User_Interface | null>>;
    loading : boolean;
    get_socket: () => Socket | null;
}

export const Auth_Context = React.createContext<Auth_Context_Interface>({
    me : null,
    set_me : () => {},
    loading : true,
    get_socket: () => null,
});

export default function Auth_Context_Provider({ children } : { children: React.ReactNode }) {
    const [me, set_me] = React.useState<User_Interface | null>(null);
    const [loading, set_loading] = React.useState<boolean>(true);
    const socket_ref = useRef<Socket | null>(null);

    React.useEffect(() => {
       set_me_from_cookie().catch(e => console.log('error fetching me', e));
    }, []);

    // Socket connection management based on user login status
    useEffect(() => {
        if (me !== null) {
            console.log('Connecting to socket with userId:', me.id);
            socket_ref.current = io(Env_Configs.api_domain, {
                auth: {
                    user_id: me.id
                }
            });

            // Socket event listeners can be added here
            socket_ref.current.on('connect', () => {
                console.log('Socket connected');
            });

            socket_ref.current.on('connect_error', (error) => {
                console.error('Socket connection error:', error);
            });
        } else {
            if (socket_ref.current) {
                console.log('Disconnecting socket');
                socket_ref.current.disconnect();
                socket_ref.current = null;
            }
        }

        // Cleanup function to disconnect socket when component unmounts
        return () => {
            if (socket_ref.current) {
                console.log('Cleaning up socket connection');
                socket_ref.current.disconnect();
                socket_ref.current = null;
            }
        };
    }, [me]);

    // Function to get the current socket instance
    const get_socket = () => socket_ref.current;

    return (
        <Auth_Context.Provider value={{
            me,
            set_me,
            loading,
            get_socket
        }}>
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
