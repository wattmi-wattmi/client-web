'use client';
import React, { FormEvent } from 'react'
import { login } from '../actions/authenticate';
import {Use_Auth_Context} from "@/contexts/auth-context";

interface IProps {
    toggle_is_login: () => void
}
export default function LoginForm({ toggle_is_login }: IProps) {
    const { set_me } = Use_Auth_Context();
    const [loading, set_loading] = React.useState<boolean>(false);
    const [username, set_username] = React.useState<string>('');
    const [password, set_password] = React.useState<string>('');
    return (
        <div className="">
            <form className="w-full space-y-3" onSubmit={handle_login}>
                <div>
                    <label htmlFor="username" className="w-full">Username:</label>
                    <input id="username" value={username} onChange={e => set_username(e.target.value)} name="username" type="text" className="w-full bg-white" required />
                </div>
                <div>
                    <label htmlFor="password" className="w-full">Password:</label>
                    <input id="password" value={password} onChange={e => set_password(e.target.value)} name="password" type="password" required className="bg-white w-full" />
                </div>
                <button type='submit' disabled={loading} className='bg-blue-300 p-2 disabled:bg-gray-500 disabled:cursor-not-allowed me-2'>Login</button>
            </form>
            <div>Does not have an account? Register <button onClick={toggle_is_login} className='cursor-pointer text-blue-600'>here</button></div>
        </div>
    );

    async function handle_login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            set_loading(true);
            const user = await login(username, password);
            set_me(user);
        } catch (e) {
            console.log((e as Error).message);
            set_me(null);
        } finally {
            set_loading(false);
        }
    }
}
