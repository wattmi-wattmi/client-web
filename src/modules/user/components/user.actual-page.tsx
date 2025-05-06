'use client';

import React, {use} from 'react';
import {Pagination_Interface, User_Interface} from "@/generals/generals.types";
import Actual_Profile_Page from "@/modules/profile/components/profile.actual-page";

interface Props_Interface {
    user_fetch_promise : Promise<{data: User_Interface | null, error: string | null, pagination: Pagination_Interface | null}>;
}

export default function Actual_User_Page({ user_fetch_promise } : Props_Interface) {
    const { data, error } = use(user_fetch_promise);
    if(error || !data) return (
        <div>
            <div>{error || 'user not found'}</div>
        </div>
    );
    return (
        <div>
            <Actual_Profile_Page user={data} />
        </div>
    );
}