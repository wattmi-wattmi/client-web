'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Routes from '@/constants/routes'
import T_Route from '@/types/routes'


export async function signout() { 
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()
    if (error) {
        redirect('/error')
    }
    revalidate_and_redirect(Routes.home);
}

function revalidate_and_redirect(route : T_Route) {
    revalidatePath(route.path, 'layout');
    redirect(route.path);
}