import { login, signout, signup } from "@/actions/authenticate";
import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        console.log(data);
        return <Auth /> 
    }
    return (
        <div>
            <form>
                <button formAction={signout}>Logout</button>
            </form>
        </div>
    )
}


function Auth() {
    return (
        <div className="w-10/12 bg-red-200 p-3">
            <form className="w-full">
                <label htmlFor="username" className="w-full">Email:</label>
                <input id="username" name="username" type="text" className="w-full bg-white" required />
                <label htmlFor="password" className="w-full">Password:</label>
                <input id="password" name="password" type="password" required className="bg-white w-full" />
                <button formAction={login} className="bg-blue-300 p-2 me-5">Log in</button>
                <button formAction={signup} className="bg-blue-300 p-2">Sign up</button>
            </form>
        </div>
    )
}

