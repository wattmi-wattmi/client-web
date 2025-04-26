'use client';
import React from "react";
import {Auth_Context} from "@/contexts/contexts.auth";
import {fetch_login} from "@/auth/auth.lib";
import Button_With_Loading from "@/generals/components/generals.button-with-loading";
export default function LoginForm() {
    const auth_context = React.useContext(Auth_Context);
    const [ username, set_username ] = React.useState<string>('');
    const [ password, set_password ] = React.useState<string>('');
    const [ error, set_error ] = React.useState<string | null>(null);
    const [ loading, set_loading ] = React.useState<boolean>(false);
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
            <div className={'text-red-500 text-sm'}>{error}</div>

            <Button_With_Loading loading={loading} label={'Login'} type={'submit'} />
        </form>
    );
    async function handle_submit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(loading) return;
        set_loading(true);
        const { data, error } = await fetch_login({username, password});
        if(error) {
            set_error(error);
        }
        if(data && !error) {
            auth_context.set_me(data);
            set_error(null);
        }
        set_loading(false);
    }
}
