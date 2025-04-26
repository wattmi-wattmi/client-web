'use client';
import React from 'react';
import {Auth_Context} from "@/contexts/contexts.auth";
import {fetch_logout} from "@/auth/auth.lib";
import Actual_Profile_Page_Name from "@/modules/profile/components/actual-page/profile.actual-page.name";

export default function Actual_Profile_Page() {
    const auth_context = React.useContext(Auth_Context);
    if(!auth_context.me) return null;
    return (
        <div>
            <Actual_Profile_Page_Name name={auth_context.me.name || auth_context.me.username} />
            <button onClick={handle_logout}>Logout</button>
        </div>
    );

    async function handle_logout() {
        const is_success_logout = await fetch_logout();
        if(is_success_logout) {
            auth_context.set_me(null);
        }
    }
}