'use client';
import React, { Suspense } from 'react';
import Browse_Page_User_Card_Container_Skeleton from './browse.user-card-container-skeleton';
import Browse_Page_User_Card_Container from './browse.user-card-container';

interface Props_Interface {
    search_params: { [key: string]: string | string[] | undefined }
}

export default function Browse_Page_Content({ search_params }: Props_Interface) {
    return (
        <div className="pt-5 pb-10">
            <div className={'text-center text-xl'}>Browse Page</div>
            <Suspense fallback={<Browse_Page_User_Card_Container_Skeleton />}>
                <Browse_Page_User_Card_Container search_params={search_params} />
            </Suspense>
        </div>
    );
}
