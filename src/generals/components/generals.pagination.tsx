'use client';

import React from "react";
import {Pagination_Interface} from "@/generals/generals.types";

interface Pagination_Props_Interface {
    pagination: Pagination_Interface;
    change_page: ((page: number) => void) & { $$typeof?: symbol }; // this must be a function that navigates
    item_type : string;
}

export default function Pagination({pagination, change_page, item_type = 'items'}: Pagination_Props_Interface) {
    const [ current_page, set_current_page ] = React.useState<number>(pagination.page);
    React.useEffect(() => {
       set_current_page(pagination.page);
    }, [ pagination.page ])
    return (
        <div className={'bg-white sticky top-0 left-0 w-full z-40'}>
            <div className={'border-3 w-full px-2 grid grid-cols-2 gap-2'}>
                <div className={'flex items-center gap-5 border-e-1 py-2 justify-center'}>
                    <button onClick={() => change_page(pagination.page - 1)} disabled={pagination.page === 1}>{'<<'}</button>
                    <div>{pagination.page}</div>
                    <button onClick={() => change_page(pagination.page + 1)} disabled={pagination.page === pagination.total_pages}>{'>>'}</button>
                </div>
                <div className={'flex items-center gap-2 py-2 justify-center'}>
                    <input type={'number'} value={String(current_page)} onChange={e => set_current_page(Number(e.target.value))} className={'outline-none border-b-1 w-6/12 ps-2'} />
                    <button onClick={jump} className={'bg-gray-400 p-1 text-white tracking-wide'}>Jump</button>
                </div>
            </div>
            <div className={'border-3 border-t-0 w-full px-2'}>
                <div className={'py-2 space-y-2'}>
                    <div className={'text-center text-sm tracking-wider'}>
                        Total pages : {pagination.total_pages}
                    </div>
                    <div className={'text-center text-sm tracking-wider'}>
                        Total {item_type} : {pagination.total_items}
                    </div>
                </div>
            </div>
        </div>
    );
    function jump() {
        if(current_page === pagination.page) return;
        if(current_page < 1) {
            set_current_page(1);
            change_page(1);
            return;
        }
        if(current_page > pagination.total_pages) {
            set_current_page(pagination.total_pages);
            change_page(pagination.total_pages);
            return;
        }
        change_page(current_page);
    }
}