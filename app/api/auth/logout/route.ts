
import { createClient } from "@/utils/supabase/server";
import { get_error_response, get_success_response } from "../../lib/response";

export async function POST() {
    try {
        const supabase = await createClient();
        const { error } = await supabase.auth.signOut();
        if(error) throw new Error(error.message);
        return get_success_response(null);
    } catch (e) {
        return get_error_response(e as Error, 500);
    }
}