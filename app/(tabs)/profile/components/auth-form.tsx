'use client';
import React from 'react'
import LoginForm from '@/app/(tabs)/profile/components/login-form';
import RegisterForm from './register-form';

interface IProps {
    title : string
}
export default function AuthForm({ title } : IProps) {
    const [is_login, set_is_login] = React.useState<boolean>(true);
    return (
        <div>
            <div className='!text-responsive-lg'>{ title }</div>
            <div className="bg-red-200 p-3">
                {is_login && (
                    <LoginForm toggle_is_login={toggle_is_login} />
                )}
                {!is_login && (
                    <RegisterForm toggle_is_login={toggle_is_login} />
                )}

            </div>
        </div>
    );

    function toggle_is_login() {
        set_is_login(prev => !prev);
    }
}
