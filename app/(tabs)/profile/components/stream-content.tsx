'use client'
import AuthForm from "@/app/(tabs)/profile/components/auth-form";
import { User } from "@supabase/supabase-js";
import { use } from "react";
import { logout } from "../actions/authenticate";
import { revalidate_layout_and_redirect } from "@/actions/general";
import Routes from "@/constants/routes";

interface IProps {
    me_response : Promise<User | null>;
}
export default function StreamContent({ me_response }: IProps) {
    const me = use(me_response);
    console.log('me', me);
    return (
        <div>
            {(!me) && (
                <div>
                    <AuthForm title="Please Login to see your profile" />
                </div>
            )}
            {me && (
                <div>
                    <form onSubmit={handle_logout}>
                        <button className="bg-red-200 rounded-2xl px-3 py-1" type="submit">Logout</button>
                    </form>
                </div>
            )}
        </div>
    );

    async function handle_logout (e : React.FormEvent) {
        e.preventDefault();
        const result = await logout();
        if(!result) console.error('error logging out');
        else {
            revalidate_layout_and_redirect(Routes.home);
        }
    }
}
