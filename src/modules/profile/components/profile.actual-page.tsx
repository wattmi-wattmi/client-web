'use client';
import React from 'react';
import {Auth_Context} from "@/contexts/contexts.auth";
import {fetch_logout} from "@/auth/auth.lib";
import Actual_Profile_Page_Name from "@/modules/profile/components/actual-page/profile.actual-page.name";
import Actual_Profile_Page_Profile from "@/modules/profile/components/actual-page/profile.actual-page.profile";
import Actual_Profile_Page_Info from "@/modules/profile/components/actual-page/profile.actual-page.info";

export default function Actual_Profile_Page() {
    const auth_context = React.useContext(Auth_Context);
    if(!auth_context.me) return null;
    return (
        <div className={'space-y-7'}>
            <Actual_Profile_Page_Name name={auth_context.me.name || auth_context.me.username} />
            <Actual_Profile_Page_Profile />
            <Actual_Profile_Page_Info username={auth_context.me.username} age={auth_context.me.age} region={auth_context.me.region} gender={auth_context.me.gender} />
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