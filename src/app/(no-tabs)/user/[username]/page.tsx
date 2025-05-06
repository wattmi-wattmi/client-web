import React, {Suspense} from 'react';
import {fetch_user_by_username} from "@/modules/user/user.lib";
import Actual_User_Page from "@/modules/user/components/user.actual-page";
import Profile_Skeleton from "@/modules/profile/components/profile.skeleton";

interface Page_Props_Interface {
    params: Promise<{ username: string }>;
}

export default async function User_Detail_Browse_Page({ params } : Page_Props_Interface) {
    const { username } = await params;
    const user_fetch_promise = fetch_user_by_username(username);
    return (
        <div>
            <Suspense fallback={<Profile_Skeleton />}>
                <Actual_User_Page user_fetch_promise={user_fetch_promise} />
            </Suspense>
        </div>
    );
}