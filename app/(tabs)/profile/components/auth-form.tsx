'use client';
import React, { FormEvent } from 'react'
import { login } from "@/actions/authenticate";

export default function AuthForm() {
    const [ loading, set_loading ] = React.useState<boolean>(false);
    return (
        <div className="bg-red-200 p-3">
            <form className="w-full" onSubmit={handle_login}>
                <label htmlFor="username" className="w-full">Email:</label>
                <input id="username" name="username" type="text" className="w-full bg-white" required />
                <label htmlFor="password" className="w-full">Password:</label>
                <input id="password" name="password" type="password" required className="bg-white w-full" />
                <button type='submit' disabled={loading} className='bg-blue-300 p-2 disabled:bg-gray-500 disabled:cursor-not-allowed me-2'>Login</button>
            </form>
        </div>
    );


    async function handle_login (e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        set_loading(true);
        const formdata = new FormData(e.currentTarget);
        await login(formdata);
    }
}
