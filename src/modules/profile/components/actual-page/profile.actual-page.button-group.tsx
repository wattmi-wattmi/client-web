'use client';

import React from "react";
import {Icon} from "@iconify/react";
import {fetch_me_update} from "@/auth/auth.lib";
import {User_Interface_Without_Fixed_Properties} from "@/generals/generals.types";
import {Auth_Context} from "@/contexts/contexts.auth";
import {Profile_About_Me_Max_Length, Profile_Message_Max_Length} from "@/modules/profile/profile.constants";

interface Props_Interface {
    is_editing: boolean;
    set_is_editing: React.Dispatch<React.SetStateAction<boolean>> & { $$typeof?: symbol };
    set_error : React.Dispatch<React.SetStateAction<string | null>> & { $$typeof?: symbol };
    user_data : Partial<User_Interface_Without_Fixed_Properties>
}

export default function Actual_Profile_Page_Button_Group({ is_editing, set_is_editing, user_data, set_error }: Props_Interface) {
    const [loading, set_loading] = React.useState<boolean>(false);
    const { set_me } = React.useContext(Auth_Context);

    return (
        <div className={'absolute right-2 top-2 cursor-pointer flex items-center gap-2'}>
            {loading
                ? <Icon icon={'gg:spinner-two'} className={'animate-spin text-3xl'}/>
                : (
                    is_editing ? (
                        <>
                            <Icon onClick={() => { set_error(null); set_is_editing(false); }} icon={'entypo:cross'} className={'text-3xl cursor-pointer'}/>
                            <Icon onClick={handle_update} icon={'mingcute:check-fill'}
                                  className={'text-3xl cursor-pointer'}/>
                        </>
                    ) : (
                        <Icon onClick={() => set_is_editing(true)} icon={'akar-icons:edit'}
                              className={'text-3xl cursor-pointer'}/>
                    )
                )}
        </div>
    )
    async function handle_update() {
        if(loading) return;
        set_loading(true);
        if(user_data.about_me && user_data.about_me.length > Profile_About_Me_Max_Length) {
            set_error('about me cannot be longer than ' + Profile_About_Me_Max_Length + ' characters');
            set_loading(false);
            return;
        }
        if(user_data.status_message && user_data.status_message.length > Profile_Message_Max_Length) {
            set_error('message cannot be longer than ' + Profile_Message_Max_Length + ' characters');
            set_loading(false);
            return;
        }
        const { data, error } = await fetch_me_update(user_data);
        if(data && !error) {
            set_me(data);
        }
        set_error(error);
        set_is_editing(false);
        set_loading(false);
    }
}