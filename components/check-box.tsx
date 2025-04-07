'use client';
import React from 'react'

interface IProps {
    value: boolean;
    handler: () => void;
    label : string;
}
export default function CheckBox({ value, handler, label }: IProps) {
    return (
        <div className='flex gap-1 items-center'>
            <div onClick={handler} className='w-4 aspect-square bg-white p-1 cursor-pointer'>
                {value && (
                    <div className='bg-red-200 w-full h-full'></div>
                )}
            </div>
            <div>{ label }</div>
        </div>
    )
}
