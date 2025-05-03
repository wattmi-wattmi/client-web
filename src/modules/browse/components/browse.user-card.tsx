'use client';
import {User_Interface} from "@/generals/generals.types";
import {Icon} from "@iconify/react";
import React from 'react';

export default function User_Card({user}: { user: User_Interface }) {
    return (
        <div className={'bg-secondary-purple border-3 px-2 py-5 relative'}>
            {user.active_now && <div className={'w-3 h-3 rounded-full bg-active-green top-1 right-2 absolute'}></div>}
            <div className={'flex flex-col gap-y-3 mx-auto w-full max-w-[300px]'}>
                <div className={'w-full h-32 bg-primary-yellow'}></div>
                <div className={'text-white text-2xl text-nowrap overflow-hidden'}>{ user.name || user.username }</div>
                <div className={'flex-1'}>
                    <div className={'text-white text-xs'}>{user.age || '--'}</div>
                    <div className={'text-white text-xs'}>{user.region || '--'}</div>
                </div>
                <div>
                    <Icon icon={ user.gender === 'male' ? 'twemoji:male-sign' : 'twemoji:female-sign'} />
                </div>
                <div className={'profile-actual-page-white-box h-32 overflow-y-auto hide-scrollbar w-full'}>
                    <div className={'w-full text-sm tracking-wide'}>
                        { user.about_me || '--' }
                    </div>
                </div>
            </div>
        </div>
    )
}
