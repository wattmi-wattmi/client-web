import { signout } from "@/actions/authenticate";
import { createClient } from "@/utils/supabase/server";
import AuthForm from "@/app/(tabs)/profile/components/auth-form";

export default async function StreamContent() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    return (
        <div>
            {(error || !data?.user) && (
                <div>
                    <AuthForm title="Please Login to see your profile" />
                </div>
            )}
            {data.user && (
                <div>
                    <form>
                        <button className="bg-red-200 rounded-2xl px-3 py-1" formAction={signout}>Logout</button>
                    </form>
                </div>
            )}
        </div>
    )
}
