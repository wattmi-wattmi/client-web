import React, {Suspense} from 'react';
import {fetch_user_by_username} from "@/modules/user/user.lib";
import Actual_User_Page from "@/modules/user/components/user.actual-page";
import Profile_Skeleton from "@/modules/profile/components/profile.skeleton";
import {Metadata} from "next";
import { metadata as base_metadata } from "@/app/layout";

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





export async function generateMetadata({ params }: Page_Props_Interface): Promise<Metadata> {
    const username = (await params).username;
    const user_data = await fetch_user_by_username(username);

    if (!user_data.data) {
        return {
            title: 'User Not Found - Wattmi Wattmi',
            description: 'The requested user profile could not be found.',
        };
    }

    const user = user_data.data;
    const display_name = user.name || user.username;
    const user_age = user.age ? `${user.age} years old` : '';
    const user_region = user.region ? `from ${user.region}` : '';
    const age_region = [user_age, user_region].filter(Boolean).join(', ');

    // Create a description that includes user details
    let description = `${display_name}'s profile on Wattmi Wattmi`;
    if (age_region) {
        description += ` - ${age_region}`;
    }
    if (user.about_me) {
        description += `. ${user.about_me.substring(0, 150)}${user.about_me.length > 150 ? '...' : ''}`;
    }

    return {
        ...base_metadata,
        title: `${display_name} - Wattmi Wattmi`,
        description: description,
        openGraph: {
            title: `${display_name} - Wattmi Wattmi`,
            description: description,
            type: 'profile',
            images: [
                {
                    url: '/assets/logo.svg',
                    width: 128,
                    height: 128,
                    alt: 'Wattmi Wattmi Logo',
                }
            ],
        },
        twitter: {
            card: 'summary',
            title: `${display_name} - Wattmi Wattmi`,
            description: description,
            images: ['/assets/logo.svg'],
        },
    };
}
