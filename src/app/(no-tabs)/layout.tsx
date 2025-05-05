import React from 'react';
import Header from "@/generals/components/generals.header";
import Back_Button from "@/modules/(no-tabs)/components/back-button";

export default function Tabs_Layout ({ children } : { children: React.ReactNode }) {
    return (
        <div className={'h-[100dvh] w-screen flex flex-col safe-area-top-bottom'}>
            <div>
                <Header />
            </div>
            <div className={'px-4 border-x-2 border-black box-border py-4'}>
                    <Back_Button />
            </div>
            <main className={'flex-1 px-4 border-x-2 border-black box-border overflow-y-auto hide-scrollbar'}>
                <div className={'mx-auto w-full max-w-[800px]'}>
                    { children }
                </div>
            </main>
        </div>
    );

}
