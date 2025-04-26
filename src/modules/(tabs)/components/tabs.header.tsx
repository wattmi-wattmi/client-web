'use client';
import Image from "next/image";
import {Icon} from "@iconify/react";
import React from "react";
import Link from "next/link";
import {Tab_Routes} from "@/modules/(tabs)/tabs.constants";

export default function Header() {
    return (
        <header className={'px-4 bg-primary-sky-blue py-2 border-2 flex items-center justify-between'}>
            <Link prefetch={true} href={Tab_Routes.home.path()} >
                <Image src={'/assets/logo.svg'} alt={'logo'} width={40} height={60} className={'cursor-pointer'} />
            </Link>
            <Icon icon={'material-symbols:menu-rounded'} className={'text-4xl'} />
        </header>
    );
}