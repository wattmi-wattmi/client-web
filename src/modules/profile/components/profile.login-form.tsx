'use client';
import React from "react";
import {Auth_Context} from "@/contexts/contexts.auth";
export default function LoginForm() {
    const auth_context = React.useContext(Auth_Context);
    const [ username, set_username ] = React.useState<string>('');
    const [ password, set_password ] = React.useState<string>('');
    return (
        <form onSubmit={handle_submit} className={'space-y-5'}>
            <div className={'text-2xl font-semibold'}>Login</div>

            <div className={'space-y-2'}>
                <div className={'text-lg font-medium'}>username</div>
                <input onChange={e => set_username(e.target.value)} value={username} type={'text'} className={'input'} required={true} />
            </div>
            <div className={'space-y-2'}>
                <div className={'text-lg font-medium'}>password</div>
                <input onChange={e => set_password(e.target.value)} value={password} type={'password'} className={'input'} required={true} />
            </div>

            <button type={'submit'} className={'bg-primary-purple text-white font-bold text-lg w-full py-3'}>
                Login
            </button>
        </form>
    );
    async function handle_submit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await auth_context.login({ username, password });
    }
}