'use client';
import React from 'react';
import {Auth_Context} from "@/contexts/contexts.auth";
import {fetch_logout} from "@/auth/auth.lib";
import Actual_Profile_Page_Name from "@/modules/profile/components/actual-page/profile.actual-page.name";
import Actual_Profile_Page_Profile from "@/modules/profile/components/actual-page/profile.actual-page.profile";
import Actual_Profile_Page_Info from "@/modules/profile/components/actual-page/profile.actual-page.info";
import Actual_Profile_Page_Interests from "@/modules/profile/components/actual-page/profile.actual-page.interests";
import Actual_Profile_Page_About_Me from "@/modules/profile/components/actual-page/profile.actual-page.about-me";
import Actual_Profile_Page_Message from "@/modules/profile/components/actual-page/profile.actual-page.message";
import {User_Interface} from "@/generals/generals.types";

export default function Actual_Profile_Page({ user } : { user : User_Interface }) {
    const auth_context = React.useContext(Auth_Context);
    const is_own_profile = !!auth_context.me && auth_context.me.id === user.id;
    return (
        <div className={'space-y-7'}>
            <Actual_Profile_Page_Name name={user.name || user.username} is_own_profile={is_own_profile}/>
            <Actual_Profile_Page_Profile />
            <Actual_Profile_Page_Info username={user.username} age={user.age} region={user.region} gender={user.gender} is_own_profile={is_own_profile} />
            <Actual_Profile_Page_Interests interests={user.interests} is_own_profile={is_own_profile} />
            <Actual_Profile_Page_About_Me about_me={user.about_me} is_own_profile={is_own_profile} />
            <Actual_Profile_Page_Message status_message={user.status_message} is_own_profile={is_own_profile} />
            { auth_context.me && auth_context.me.id === user.id && (
                <button onClick={handle_logout} className={'bg-primary-purple px-4 py-2 border-3'}>Logout</button>
            )}
        </div>
    );

    async function handle_logout() {
        const is_success_logout = await fetch_logout();
        if(is_success_logout) {
            auth_context.set_me(null);
        }
    }
}