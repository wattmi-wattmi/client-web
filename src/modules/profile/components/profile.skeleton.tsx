
import React from 'react';

export default function Profile_Skeleton() {
    return (
        <div className={'space-y-7 pt-5 pb-10'}>
            {/* Name section skeleton */}
            <div className={'profile-actual-page-white-box'}>
                <div className={'w-9/12 h-8 bg-white/30 rounded animate-skeleton'}></div>
            </div>

            {/* Profile section skeleton */}
            <div className={'profile-actual-page-white-box'}>
                <div className={'flex w-7/12 mx-auto h-36 bg-primary-yellow/30 animate-skeleton'}></div>
            </div>

            {/* Info section skeleton */}
            <div className={'profile-actual-page-white-box space-y-3'}>
                <div className={'text-stroke text-2xl'}>info</div>
                <div className={'h-6 bg-white/30 rounded w-1/2 animate-skeleton mb-2'}></div>
                <div className={'h-6 bg-white/30 rounded w-1/3 animate-skeleton mb-2'}></div>
                <div className={'h-6 bg-white/30 rounded w-1/4 animate-skeleton mb-2'}></div>
                <div className={'h-6 bg-white/30 rounded w-2/5 animate-skeleton'}></div>
            </div>

            {/* Interests section skeleton */}
            <div className={'profile-actual-page-white-box space-y-3'}>
                <div className={'text-stroke text-2xl'}>interests</div>
                <div className={'w-full flex items-center flex-wrap gap-2'}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={'border-2 flex items-stretch'}>
                            <div className={'bg-primary-yellow/30 px-3 py-1 w-20 animate-skeleton'}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Me section skeleton */}
            <div className={'profile-actual-page-white-box space-y-3'}>
                <div className={'text-2xl text-stroke'}>About Me</div>
                <div className={'space-y-2'}>
                    <div className={'h-4 bg-white/30 rounded w-full animate-skeleton'}></div>
                    <div className={'h-4 bg-white/30 rounded w-5/6 animate-skeleton'}></div>
                    <div className={'h-4 bg-white/30 rounded w-4/6 animate-skeleton'}></div>
                </div>
            </div>

            {/* Message section skeleton */}
            <div className={'profile-actual-page-white-box space-y-3'}>
                <div className={'text-2xl text-stroke'}>Message</div>
                <div className={'space-y-2'}>
                    <div className={'h-4 bg-white/30 rounded w-full animate-skeleton'}></div>
                    <div className={'h-4 bg-white/30 rounded w-3/4 animate-skeleton'}></div>
                </div>
            </div>
        </div>
    );
}