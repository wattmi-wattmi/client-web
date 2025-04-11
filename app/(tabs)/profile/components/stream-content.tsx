'use client'
import AuthForm from "@/app/(tabs)/profile/components/auth-form";
import { User } from "@supabase/supabase-js";
import { logout } from "../actions/authenticate";
import {Use_Auth_Context} from "@/contexts/auth-context";

interface IProps {
    me : User | null;
}
export default function StreamContent({ me }: IProps) {
    const { set_me } = Use_Auth_Context();
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
            set_me(null);
        }
    }
}
