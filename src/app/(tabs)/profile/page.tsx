'use client';
import React, {useContext} from "react";
import Auth_Form from "@/modules/profile/components/profile.auth-form";
import {Auth_Context} from "@/contexts/contexts.auth";
import Profile_Skeleton from "@/modules/profile/components/profile.skeleton";
import Actual_Profile_Page from "@/modules/profile/components/profile.actual-page";

export default function Profile_Page() {
    const auth_context = useContext(Auth_Context);
    if(auth_context.loading) return <Profile_Skeleton/>;
    if(!auth_context.me)
    return (
        <div className={'pt-5 pb-10'}>
            <Auth_Form message={'Please login to see your profile'} />
        </div>
    );
    return (
        <div className={'pt-5 pb-10'}>
            <Actual_Profile_Page user={auth_context.me} />
        </div>
    );
}

