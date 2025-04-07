'use client';
import React, { FormEvent } from 'react'
import { IErrorResponse, TGender } from '@/types/general';
import { revalidate_and_redirect } from '@/actions/general';
import Routes from '@/constants/routes';
import Api_Routes from '@/constants/api-routes';
import CheckBox from '@/components/check-box';
interface IProps {
    toggle_is_login: () => void
}

export default function RegisterForm({ toggle_is_login }: IProps) {
    const [loading, set_loading] = React.useState<boolean>(false);
    const [username, set_username] = React.useState<string>('');
    const [password, set_password] = React.useState<string>('');
    const [confirm_password, set_confirm_password] = React.useState<string>('');
    const [gender, set_gender] = React.useState<TGender>('female');

    return (
        <div className="">
            <form className="w-full space-y-3" onSubmit={handle_register}>
                <div>
                    <label htmlFor="username" className="w-full">Username:</label>
                    <input id="username" value={username} onChange={e => set_username(e.target.value)} name="username" type="text" className="w-full bg-white" required />
                </div>
                <div>
                    <label htmlFor="password" className="w-full">Password:</label>
                    <input id="password" value={password} onChange={e => set_password(e.target.value)} name="password" type="password" required className="bg-white w-full" />
                </div>
                <div>
                    <label htmlFor="confirm_password" className="w-full">Confirm Password:</label>
                    <input id="confirm_password" value={confirm_password} onChange={e => set_confirm_password(e.target.value)} name="confirm_password" type="password" required className="bg-white w-full" />
                </div>
                <div>
                    <label htmlFor="confirm_password" className="w-full">Gender:</label>
                    <div className='flex gap-6'>
                        <CheckBox value={gender === 'female'} handler={() => set_gender('female')} label='female' />
                        <CheckBox value={gender === 'male'} handler={() => set_gender('male')} label='male' />
                    </div>
                </div>
                <button type='submit' disabled={loading} className='bg-blue-300 p-2 disabled:bg-gray-500 disabled:cursor-not-allowed me-2'>Register</button>
            </form>
            <div>Already have an account? Login <button onClick={toggle_is_login} className='cursor-pointer text-blue-600'>here</button></div>
        </div>
    );

    async function handle_register(e: FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault();
            set_loading(true);
            const url = Api_Routes.register();
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, gender })
            });
            const data = await res.json();
            if (data.error) throw new Error((data.error as IErrorResponse).message);
            await revalidate_and_redirect(Routes.profile);
        } catch (e) {
            console.log((e as Error).message);
        } finally {
            set_loading(false);
        }
    }
}
