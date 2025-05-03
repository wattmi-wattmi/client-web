'use client';
import User_Card from "@/modules/browse/components/browse.user-card";
import {Pagination_Interface, User_Interface} from "@/generals/generals.types";
import {use} from "react";

interface Props_Interface {
    fetch_users_promise : Promise<{
        data: User_Interface[] | null;
        error: string | null;
        pagination: Pagination_Interface | null;
    }>
}

export default function Browse_Page_User_Card_Container({fetch_users_promise}: Props_Interface) {
    const {data, error, pagination} = use(fetch_users_promise);
    console.log(data, pagination);
    if (error || !data) return <div>internal server error...please try again</div>;
    return (
        <div className={'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}>
            {data.map(user => (
                <User_Card user={user} key={user.id}/>
            ))}
        </div>
    )
}

