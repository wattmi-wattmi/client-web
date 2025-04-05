'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Routes from '@/constants/routes'
import T_Route from '@/types/routes'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: `${formData.get('username') as string}@dummy.com`,
        password: formData.get('password') as string,
    }

    const { error, data : user } = await supabase.auth.signInWithPassword(data)
    console.log(user);
    if (error) {
        redirect('/error')
    }

    revalidate_and_redirect(Routes.profile);
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: `${formData.get('username') as string}@dummy.com`,
        password: formData.get('password') as string,
    }

    const { error, data : user } = await supabase.auth.signUp(data)
    console.log(user);

    if (error) {
        console.log(error);
        redirect('/error')
    }

    revalidate_and_redirect(Routes.profile);
}

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