'use client';
import Register_Form from "@/modules/profile/components/profile.register-form";
import React from "react";
import Login_Form from "@/modules/profile/components/profile.login-form";

export default function Auth_Form ({ message = 'Please login'} : { message?: string }) {
    const [ is_old_user, set_is_old_user ] = React.useState<boolean>(true);
    return (
        <div>
            <div className={'mt-5 text-center text-2xl text-stroke'}>{ message }</div>
            <div className={'mt-5 border-2 bg-white px-4 py-8'}>
                <div>
                    {is_old_user ? <Login_Form /> : <Register_Form/>}
                </div>
                {!is_old_user && (
                    <div className={'text-sm tracking-wider mt-5'}>
                        already have an account? login <span onClick={() => set_is_old_user(true)} className={'text-primary-purple underline underline-offset-2 cursor-pointer'}>here</span>.
                    </div>
                )}
                {is_old_user && (
                    <div className={'text-sm tracking-wider mt-5'}>
                        does not have an account? register <span onClick={() => set_is_old_user(false)} className={'text-primary-purple underline underline-offset-2 cursor-pointer'}>here</span>.
                    </div>
                )}
            </div>
        </div>
    )
}