'use server';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import T_Route from '@/types/routes'

export async function revalidate_layout_and_redirect(route : T_Route) {
    revalidatePath(route.path, 'layout');
    redirect(route.path);
}