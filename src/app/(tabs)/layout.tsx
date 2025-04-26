import React from 'react';
import Footer from "@/modules/(tabs)/components/tabs.footer";
import Header from "@/modules/(tabs)/components/tabs.header";

export default function Tabs_Layout ({ children } : { children: React.ReactNode }) {
    return (
        <div className={'h-[100dvh] w-screen flex flex-col safe-area-top-bottom'}>
            <div>
                <Header />
            </div>
            <main className={'flex-1 px-4 border-x-2 border-black box-border overflow-x-auto'}>
                <div className={'mx-auto w-full max-w-[640px]'}>
                    { children }
                </div>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    );
}
