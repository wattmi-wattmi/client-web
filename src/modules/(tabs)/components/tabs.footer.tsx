'use client';
import Tab_Route_Link from "@/modules/(tabs)/components/tabs.tab-route-link";
import {Tab_Routes} from "@/modules/(tabs)/tabs.constants";
import React from "react";

export default function Footer() {
    return (
        <footer className={'bg-primary-sky-blue grid grid-cols-4 px-4 py-2 gap-5 border-2'}>
            <Tab_Route_Link route={Tab_Routes.home} />
            <Tab_Route_Link route={Tab_Routes.browse} />
            <Tab_Route_Link route={Tab_Routes.chats} />
            <Tab_Route_Link route={Tab_Routes.profile} />
        </footer>
    );
}