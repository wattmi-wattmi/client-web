'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
import {Icon} from "@iconify/react";
import React from "react";
import {Tab_Route_Type} from "../tabs.types";

export default function Tab_Route_Link({route}: { route: Tab_Route_Type }) {
    const path_name = usePathname()
    const is_current_route = path_name === route.path();
    return (
        <Link href={route.path()} prefetch={true}
              className={'w-full aspect-square relative rounded-2xl max-h-32' + (is_current_route ? ' border-2 bg-primary-purple' : '')}>
            <Icon icon={route.icon} className={'text-4xl absolute-center'}/>
        </Link>
    )
}


