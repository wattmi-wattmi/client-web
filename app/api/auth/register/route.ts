import { NextRequest } from "next/server";
import { createClient, createAdminClient } from "@/utils/supabase/server";
import { get_error_response, get_success_response } from "@/app/api/lib/response";
import { get_dummy_email } from "@/app/api/auth/lib/general";

export async function POST(req: NextRequest) {
    const supabase = await createClient();
    const supabase_admin = await createAdminClient();
    try {
        const body = await req.json();
        const { username, password, gender } = body;
        const email = get_dummy_email(username);
        const res = await supabase.auth.signUp({ email, password });
        const { data, error } = res;

        if (error) {
            throw new Error(error.message);
        }
        if (data.user && data.session) {
            const { data : user_data, error : user_data_error } = await supabase
                .from('user_data')
                .insert([
                    { user_id : data.user.id, username, gender },
                ]).select();
                if(user_data_error) {
                    await supabase_admin.auth.admin.deleteUser(data.user.id);
                    throw new Error(user_data_error.message);
                }
            return get_success_response(data.user, data.session.access_token, data.session.refresh_token);
        } else {
            throw new Error('unknown error occurred');
        }
    } catch (e) {
        return get_error_response(e as Error, 401);
    }
}
