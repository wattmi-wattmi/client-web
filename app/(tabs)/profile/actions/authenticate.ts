'use server';
import Api_Routes from "@/constants/api-routes";
import { Cookies_Keys } from "@/constants/general";
import { IErrorResponse, TGender } from "@/types/general";
import { User } from "@supabase/supabase-js";
import { cookies } from "next/headers";
const own_url = process.env.OWN_URL!;
const supabase_id = process.env.SUPABASE_ID!;

export async function login(username: string, password: string) {
    const url = own_url + Api_Routes.login();
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (data.error) throw new Error((data.error as IErrorResponse).message);
    const cookie_store = await cookies();
    cookie_store.set(Cookies_Keys.access_token, data.access_token);
    cookie_store.set(Cookies_Keys.refresh_token, data.refresh_token);
}

export async function register(username: string, password: string, gender: TGender) {
    const url = own_url + Api_Routes.register();
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, gender })
    });
    const data = await res.json();
    if (data.error) throw new Error((data.error as IErrorResponse).message);
    const cookie_store = await cookies();
    cookie_store.set(Cookies_Keys.access_token, data.access_token);
    cookie_store.set(Cookies_Keys.refresh_token, data.refresh_token);
}

export async function get_me(): Promise<User | null> {
    const url = own_url + Api_Routes.me();
    const cookie_store = await cookies();
    const token = cookie_store.get(Cookies_Keys.access_token)?.value;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    if (data.error) return null;
    else return data.data as User;
}

export async function logout() {
    const url = own_url + Api_Routes.logout();
    const cookie_store = await cookies();
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    if (data.error) return false;
    cookie_store.delete(Cookies_Keys.access_token);
    cookie_store.delete(Cookies_Keys.refresh_token);
    const other_cookies = [
        `sb-${supabase_id}-auth-token`,
        `sb-${supabase_id}-auth-token-code-verifier`,
        `sb-${supabase_id}-provider-token`
    ];
    other_cookies.forEach(item => cookie_store.delete(item));
    return true;
}

