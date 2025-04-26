'use client';
import React from "react";
import {Gender_Type} from "@/generals/generals.types";
import Button_With_Loading from "@/generals/components/generals.button-with-loading";
import {fetch_check_username, fetch_register} from "@/auth/auth.lib";
import {Auth_Context} from "@/contexts/contexts.auth";

export default function Register_Form() {
    const auth_context = React.useContext(Auth_Context);
    const [username, set_username] = React.useState<string>('');
    const [password, set_password] = React.useState<string>('');
    const [error, set_error] = React.useState<string | null>(null);
    const [loading, set_loading] = React.useState<boolean>(false);
    const [gender, set_gender] = React.useState<Gender_Type>('female');
    const [confirm_password, set_confirm_password] = React.useState<string>('');
    const [username_error, set_username_error] = React.useState<string | null>(null);
    const [password_error, set_password_error] = React.useState<string | null>(null);

    React.useEffect(() => {
        handle_check_username(username).catch(e => console.log('error checking username', e));
    }, [username]);

    return (
        <form onSubmit={handle_submit} className={'space-y-5'}>
            <div className={'text-2xl font-semibold'}>Register</div>

            <div className={'space-y-2'}>
                <div className={'text-lg font-medium'}>username</div>
                <input onChange={(e) => set_username(e.target.value)} value={username} type={'text'}
                       className={'input'} required={true}/>
                <div className={'text-sm text-gray-500 tracking-wide'}>
                    please choose carefully, username cannot be changed later
                </div>
                <div className={'text-red-500 text-sm'}>
                    {username_error}
                </div>
            </div>
            <div className={'space-y-2'}>
                <div className={'text-lg font-medium'}>password</div>
                <input onChange={(e) => set_password(e.target.value)} value={password} type={'password'}
                       className={'input'} required={true}/>
                <div className={'text-red-500 text-sm'}>
                    {password_error}
                </div>
            </div>
            <div className={'space-y-2'}>
                <div className={'text-lg font-medium'}>confirm password</div>
                <input onChange={e => set_confirm_password(e.target.value)} value={confirm_password} type={'password'}
                       className={'input'} required={true}/>
            </div>

            <div className={'space-y-2'}>
                <div className={'text-lg font-medium'}>gender</div>
                <div className={'flex items-center gap-14'}>
                    <Checkbox condition={gender === 'female'} label={'female'} handler={() => set_gender('female')}/>
                    <Checkbox condition={gender === 'male'} label={'male'} handler={() => set_gender('male')}/>
                </div>
            </div>
            <div className={'text-red-500 text-sm'}>
                {error}
            </div>

            <Button_With_Loading loading={loading} type={'submit'} label={'Register'}/>
        </form>
    );


    async function handle_submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (loading) return;
        set_loading(false);
        set_password_error(null);
        if (password.length < 8) {
            set_password_error('password must be at least 8 characters');
            return;
        }
        if (password !== confirm_password) {
            set_password_error('password and confirm password must be the same');
            return;
        }
        if (username_error) return;
        set_loading(true);
        const {data, error} = await fetch_register({username, password, gender});
        if (error) {
            set_error(error);
        }
        if (data && !error) {
            auth_context.set_me(data);
            set_password_error(null);
            set_error(null);
        }
        set_loading(false);
    }

    async function handle_check_username(username: string) {
        if (!username) {
            set_username_error(null);
            return;
        }
        const {data, error} = await fetch_check_username(username);
        if (error) {
            set_username_error(error);
        }
        if (data && !error) {
            set_username_error(null);
        }
    }
}


function Checkbox({condition, label, handler}: { condition: boolean, label: string, handler: () => void }) {
    return (
        <div className={'flex items-center gap-2'}>
            <div onClick={handler} className={'w-8 h-8 border p-1.5 cursor-pointer'}>
                {condition && (
                    <div className={'w-full h-full bg-primary-sky-blue'}></div>
                )}
            </div>
            <div className={'text-sm tracking-wide'}>{label}</div>
        </div>
    )
}
