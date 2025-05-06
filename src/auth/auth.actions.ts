'use server';

import {User_Interface} from "@/generals/generals.types";
import {revalidatePath} from "next/cache";
import {Tab_Routes} from "@/modules/(tabs)/tabs.constants";
import {No_Tab_Routes} from "@/modules/(no-tabs)/no-tabs.constants";

export async function revalidate_paths_when_me_change(me : User_Interface | null) {
    revalidatePath(Tab_Routes.browse.path());
    if(me) {
        revalidatePath(No_Tab_Routes.user_detail.path(me.username));
    }
    console.log('paths revalidated');
}