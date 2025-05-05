'use client';

import {Icon} from "@iconify/react";
import {useRouter} from "next/navigation";

export default function Back_Button() {
    const router = useRouter();
    return (
        <div onClick={() => router.back()} className={'bg-white border-2 w-fit p-1 cursor-pointer'}>
            <Icon icon={'mingcute:left-line'} className={'text-2xl cursor-pointer'}/>
        </div>
    );
}