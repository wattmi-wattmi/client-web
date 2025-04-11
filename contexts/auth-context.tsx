'use client';
import React, {useContext} from 'react';
import {User} from "@supabase/supabase-js";
import {get_me} from "@/app/(tabs)/profile/actions/authenticate";

type Auth_Context_Type = {
    me : User | null;
    loading : boolean;
    set_me : React.Dispatch<React.SetStateAction<User | null>>;
}

const Auth_Context = React.createContext<Auth_Context_Type>({
    me : null, loading : true, set_me : () => null
});

export const Use_Auth_Context = () => useContext(Auth_Context);

export default function Auth_Context_Provider({ children } : { children: React.ReactNode }) {
    const [ me, set_me ] = React.useState<Auth_Context_Type['me']>(null);
    const [ loading, set_loading ] = React.useState<Auth_Context_Type['loading']>(true);

    React.useEffect(() => {
        async function fetch_me () {
            try {
                const user = await get_me();
                set_me(user);
            } catch(e) {
                console.log(e);
                set_me(null);
            } finally {
                set_loading(false);
            }
        }
        fetch_me();
    }, []);

    return (
        <Auth_Context.Provider value={{ me, loading, set_me }}>
            { children }
        </Auth_Context.Provider>
    );
}