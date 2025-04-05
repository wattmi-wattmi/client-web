'use client';
import React from 'react'
import { Icon } from '@iconify/react';
import Link from "next/link";
import T_Route from '@/types/routes';
import { usePathname } from 'next/navigation';

export default function TabLink({ route } : { route : T_Route }) {
    const pathname = usePathname(); 
    return (
        <Link aria-label={route.name} prefetch={true} href={route.path} className={`cursor-pointer rounded-4xl p-1 ${pathname === route.path && 'bg-gray-300'}`}>
            <div className='w-full flex justify-center my-2'>
                <Icon icon={route.icon} className="text-2xl" />
            </div>
            <div className='text-center w-full hidden tablet:block'>{route.label}</div>
        </Link>
    )
}
