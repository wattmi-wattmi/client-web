'use client';

import React from 'react';
import {Icon} from "@iconify/react";
import {Gender_Type} from "@/generals/generals.types";
import {Genders} from "@/generals/generals.constants";
import {User_Search_Queries_Interface} from "@/modules/browse/browse.types";

interface Props_Interface {
    handle_search : ((keyword : string, gender : Gender_Type | undefined) => void) & { $$typeof?: symbol };
    search_queries : User_Search_Queries_Interface;
}

export default function Browse_Page_Search_Box({ handle_search, search_queries } : Props_Interface) {
    const [ gender, set_gender ] = React.useState<Gender_Type | undefined>(undefined);
    const [ keyword, set_keyword ] = React.useState<string>(search_queries.search || '');
    const [ show_gender_menu, set_show_gender_menu ] = React.useState<boolean>(false);
    React.useEffect(() => {
       set_show_gender_menu(false);
    }, [gender]);
    return (
        <div className={'w-full bg-white border-2 flex items-center'}>
            <input value={keyword} onChange={e => set_keyword(e.target.value)} type={'text'} className={'input border-none'} />
            <div className={'relative border-x-2'}>
                <div onClick={() => set_show_gender_menu(prev => !prev)} className={'flex items-center gap-3 py-2 cursor-pointer px-4'}>
                    <div>{gender || 'all'}</div>
                    <div>
                        <Icon icon={show_gender_menu ? 'mingcute:up-line' : 'mingcute:down-line'} className={'text-2xl'} />
                    </div>
                </div>
                {show_gender_menu &&(
                    <div className={'absolute bg-white top-full left-0 shadow-lg translate-y-2 z-50 border-2 w-full'}>
                        <div onClick={() => set_gender(undefined)} className={'border-b-2 px-3 py-2 cursor-pointer text-sm'}>
                            all
                        </div>
                        <div onClick={() => set_gender(Genders.female)} className={'border-b-2 px-3 py-2 cursor-pointer text-sm'}>
                            female
                        </div>
                        <div onClick={() => set_gender(Genders.male)} className={'px-3 py-2 cursor-pointer text-sm'}>
                            male
                        </div>
                    </div>
                )}
            </div>
            <button onClick={search_icon_click_handler} className={'p-2'}>
                <Icon icon={'mynaui:search'} className={'text-2xl'} />
            </button>
        </div>
    );

    function search_icon_click_handler() {
        set_show_gender_menu(false);
        if(keyword === search_queries.search && gender === search_queries.gender) return;
        handle_search(keyword, gender);
    }
}