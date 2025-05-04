import React from 'react';

export default function User_Card_Skeleton() {
    return (
        <div className={'bg-secondary-purple border-3 px-2 py-5 relative'}>
            <div className={'flex flex-col gap-y-3 mx-auto w-full max-w-[300px]'}>
                {/* Image placeholder */}
                <div className={'w-full h-32 bg-primary-yellow/30 animate-skeleton'}></div>

                {/* Name placeholder */}
                <div className={'h-8 bg-white/30 rounded w-3/4 animate-skeleton'}></div>

                {/* Age and region placeholders */}
                <div className={'flex-1'}>
                    <div className={'h-4 bg-white/30 rounded w-1/4 animate-skeleton mb-1'}></div>
                    <div className={'h-4 bg-white/30 rounded w-1/3 animate-skeleton'}></div>
                </div>

                {/* Gender icon placeholder */}
                <div className={'h-6 w-6 bg-white/30 rounded-full animate-skeleton'}></div>

                {/* About me placeholder */}
                <div className={'profile-actual-page-white-box h-32 w-full'}>
                    <div className={'w-full space-y-2'}>
                        <div className={'h-3 bg-gray-300/50 rounded w-full animate-skeleton'}></div>
                        <div className={'h-3 bg-gray-300/50 rounded w-5/6 animate-skeleton'}></div>
                        <div className={'h-3 bg-gray-300/50 rounded w-4/6 animate-skeleton'}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
