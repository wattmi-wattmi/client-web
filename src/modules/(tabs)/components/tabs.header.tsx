'use client';
import Image from "next/image";
import {Icon} from "@iconify/react";
import React from "react";

export default function Header() {
    return (
        <header className={'px-4 bg-primary-sky-blue py-2 border-2 flex items-center justify-between'}>
            <Image src={'/assets/logo.svg'} alt={'logo'} width={40} height={60} />
            <Icon icon={'material-symbols:menu-rounded'} className={'text-4xl'} />
        </header>
    );
}