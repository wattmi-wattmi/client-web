'use client';

import React from 'react';
import {Gender_Type, Pagination_Interface, User_Interface} from "@/generals/generals.types";
import Browse_Page_User_Card_Container from "@/modules/browse/components/browse.user-card-container";
import Pagination from "@/generals/components/generals.pagination";
import {User_Search_Queries_Interface} from "@/modules/browse/browse.types";
import {useRouter} from "next/navigation";
import {Tab_Routes} from "@/modules/(tabs)/tabs.constants";
import Browse_Page_Search_Box from "@/modules/browse/components/browse.search-box";

interface Props_Interface {
    fetch_users_promise : Promise<{
        data: User_Interface[] | null;
        error: string | null;
        pagination: Pagination_Interface | null;
    }>;
    search_queries : User_Search_Queries_Interface;
}

export default function Browse_Page_Content({fetch_users_promise, search_queries}: Props_Interface) {
    const router = useRouter();
    const {data, error, pagination} = React.use(fetch_users_promise);
    if (error || !data) return <div>internal server error...please try again</div>;
    return (
        <div className={'space-y-5 relative'}>
            <Browse_Page_Search_Box handle_search={handle_search} search_queries={search_queries} />
            {!!pagination && (
                <Pagination pagination={pagination} change_page={change_page} item_type={'users'} />
            )}
            <Browse_Page_User_Card_Container users={data} />
        </div>
    );

    function change_page(page : number) {
        if(!pagination) return;
        if(pagination.page === page) return;
        router.push(Tab_Routes.browse.path_with_params({ ...search_queries, page }));
    }
    function handle_search(keyword : string, gender : Gender_Type | undefined) {
        router.push(Tab_Routes.browse.path_with_params({ ...search_queries, search : keyword, gender, page : 1 }));
    }
}