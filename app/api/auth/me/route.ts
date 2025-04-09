import { NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { get_error_response, get_success_response } from "../../lib/response";

export async function GET(req : NextRequest) {
    try {
        const auth_header = req.headers.get('authorization');
        const access_token = auth_header?.split(' ')[1];
        if(!access_token) throw new Error('auth token missing');
        const supabase = await createClient(); 
        const { data, error } = await supabase.auth.getUser(access_token);
        if(error || !data?.user) throw new Error(error?.message || 'not authorized');
        return get_success_response(data.user);
    } catch (e) {
        console.log(e);
        return get_error_response(e as Error, 403);
    }

}