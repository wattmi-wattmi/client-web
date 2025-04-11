'use client';
import React from 'react'
import { TGender } from '@/types/general';
import CheckBox from '@/components/check-box';
import { register } from '../actions/authenticate';
import {Use_Auth_Context} from "@/contexts/auth-context";

interface IProps {
    toggle_is_login: () => void
}

export default function RegisterForm({ toggle_is_login }: IProps) {
    const { set_me } = Use_Auth_Context();
    const [loading, set_loading] = React.useState<boolean>(false);
    const [username, set_username] = React.useState<string>('');
    const [password, set_password] = React.useState<string>('');
    const [confirm_password, set_confirm_password] = React.useState<string>('');
    const [gender, set_gender] = React.useState<TGender>('female');
    const [ username_error , set_username_error ] = React.useState<string | null>(null);
    const [ password_error, set_password_error ] = React.useState<string | null>(null);
    const [ confirm_password_error , set_confirm_password_error ] = React.useState<string | null>(null);

    React.useEffect(() => {
        handle_username_error(username);
        handle_password_error(password);
        handle_confirm_password_error(password, confirm_password);
    }, [username, password, confirm_password]);

    return (
        <div className="">
            <form className="w-full space-y-3" onSubmit={handle_register}>
                <div>
                    <label htmlFor="username" className="w-full">Username:</label>
                    <input id="username" value={username} onChange={(e) => set_username(e.target.value)} name="username" type="text" className="w-full bg-white" required />
                    <span className='text-responsive-sm text-red-400 font-semibold'>{ username_error }</span>
                </div>
                <div>
                    <label htmlFor="password" className="w-full">Password:</label>
                    <input id="password" value={password} onChange={e => set_password(e.target.value)} name="password" type="password" required className="bg-white w-full" />
                    <span className='text-responsive-sm text-red-400 font-semibold'>{ password_error }</span>
                </div>
                <div>
                    <label htmlFor="confirm_password" className="w-full">Confirm Password:</label>
                    <input id="confirm_password" value={confirm_password} onChange={e => set_confirm_password(e.target.value)} name="confirm_password" type="password" required className="bg-white w-full" />
                    <span className='text-responsive-sm text-red-400 font-semibold'>{ confirm_password_error }</span>
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

    async function handle_register(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault();
            if(!is_valid_form(username, password, confirm_password)) return;
            set_loading(true);
            const user = await register(username, password, gender);
            set_me(user);
        } catch (e) {
            console.log((e as Error).message);
            set_me(null);
        } finally {
            set_loading(false);
        }
    }

    function handle_username_error(username : string) : void {
        if(!username) {
            set_username_error(null);
            return;
        } else if(!is_valid_username_length(username)) {
            set_username_error('username is too short');
            return;
        } else if(!is_valid_username_syntax(username)) {
            set_username_error('username is not valid');
            return;
        } else {
            set_username_error(null);
            return;
        }
    }

    function handle_password_error(password : string) : void {
        if(!password) {
            set_password_error(null);
            return;
        } else if(!is_valid_password_length(password)) {
            set_password_error('password is too short')
        } else {
            set_password_error(null);
            return;
        }
    }

    function handle_confirm_password_error(password : string, confirm_password : string) {
        if(!confirm_password) {
            set_confirm_password_error(null);
            return;
        } else if(!are_passwords_match(password, confirm_password)) {
            set_confirm_password_error('passwords do not match');
            return;
        } else {
            set_confirm_password_error(null);
            return;
        }
    }

}

    function is_valid_form (username : string, password : string, confirm_password : string) {
        return is_valid_username(username) && is_valid_password(password, confirm_password);
    } 
    function is_valid_username (username : string) :boolean {
        return is_valid_username_length(username) && is_valid_username_syntax(username);
    }

    function is_valid_password (password : string, confirm_password : string) : boolean {
        return is_valid_password_length(password) && are_passwords_match(password, confirm_password);
    }

    function is_valid_username_syntax(username: string): boolean {
        // Accepts: alphanumeric, underscore, dash, dot (not starting or ending with dot/dash/underscore)
        const usernameRegex = /^[a-zA-Z0-9](?!.*[._-]{2})[a-zA-Z0-9._-]{0,62}[a-zA-Z0-9]$/;
        return usernameRegex.test(username);
    }

    function is_valid_username_length(username : string) : boolean {
        return username.length > 3;
    }

    function is_valid_password_length(password : string) : boolean {
        return password.length >= 8;
    }

    function are_passwords_match(password : string, confirm_password : string) : boolean {
        return password === confirm_password;
    }
