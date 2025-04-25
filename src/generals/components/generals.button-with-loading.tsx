'use client';
import {Icon} from "@iconify/react";
import React from "react";

type Button_Type = "button" | "submit";

type Button_Props_Type= {
    loading: boolean,
    label?: string,
    className?: string
    type: Button_Type,
    onClick?: () => void,
}
export default function Button_With_Loading({ loading, label = 'Click Me', className = '', type, onClick } : Button_Props_Type) {
    if(type === 'submit') return (
        <button type={type} className={'bg-primary-purple text-white font-bold text-lg w-full py-3 flex items-center justify-center gap-2 ' + className}>
            { loading && <Icon icon={'gg:spinner-two'} className={'animate-spin text-lg text-primary-yellow'} /> }
            {label}
        </button>
    );
    else return (
        <button type={type} onClick={handle_click} className={'bg-primary-purple text-white font-bold text-lg w-full py-3 flex items-center justify-center gap-2 ' + className}>
            { loading && <Icon icon={'gg:spinner-two'} className={'animate-spin text-lg text-primary-yellow'} /> }
            {label}
        </button>
    );

    function handle_click() {
        if(onClick) onClick();
    }
}
