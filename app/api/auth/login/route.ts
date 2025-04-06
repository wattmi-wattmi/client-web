import { NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { get_error_response, get_success_response } from "../../lib/response";
import { get_dummy_email } from "../lib/general";

export async function POST(req : NextRequest) {
    try {

        const body = await req.json();
        const { username, password } = body;
        const supabase = await createClient();
        const email = get_dummy_email(username); 
        
        const res = await supabase.auth.signInWithPassword({ email, password });
        const { data, error } = res;

        if(error) {
            throw new Error(error.message); 
        } 
        console.log('res from supabase', data.session.access_token, data.session.refresh_token);
        return get_success_response(data.user, data.session.access_token, data.session.refresh_token);
    } catch (e) {
        return get_error_response(e as Error, 401);
    }
}