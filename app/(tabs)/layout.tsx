import React from "react";
import TabLink from "@/app/(tabs)/components/tab-link";
import Routes from "@/constants/routes";

export default function MainLayout ({ children } : Readonly<{ children : React.ReactNode }>) {
    return (
        <>
            <header></header>
            <main className="min-h-[100dvh]">
                { children }
            </main>
            <footer className="fixed bottom-0 left-0 w-full px-3 grid grid-cols-3 gap-2 pb-7">
                <TabLink route={Routes.home} />
                <TabLink route={Routes.browse} />
                <TabLink route={Routes.profile} />
            </footer>
        </>
    )
}