import {Suspense} from "react";
import Browse_Page_User_Card_Container_Skeleton from "@/modules/browse/components/browse.user-card-container-skeleton";
import {fetch_users, get_formatted_user_search_queries} from "@/modules/browse/browse.lib";
import Browse_Page_Content from "@/modules/browse/components/browse.content";

interface Browse_Page_Props_Interface {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Browse_Page( page_props : Browse_Page_Props_Interface ) {
    const search_params = await page_props.searchParams;
    const formatted_search_queries = get_formatted_user_search_queries(search_params);
    const fetch_users_promise = fetch_users(formatted_search_queries);
    return (
        <div className="pt-5 pb-10">
            <Suspense fallback={<Browse_Page_User_Card_Container_Skeleton />}>
                <Browse_Page_Content fetch_users_promise={fetch_users_promise} search_queries={formatted_search_queries} />
            </Suspense>
        </div>
    );
}
