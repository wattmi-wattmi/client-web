'use client';
import React from 'react';
import User_Card_Skeleton from './browse.user-card-skeleton';

export default function Browse_Page_User_Card_Container_Skeleton() {
    // Create an array of 6 skeleton cards (2 rows of 3 cards on desktop)
    const skeleton_cards = Array(6).fill(null);
    
    return (
        <div className={'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}>
            {skeleton_cards.map((_, index) => (
                <User_Card_Skeleton key={index} />
            ))}
        </div>
    );
}
