'use client';

import React from "react";
import {User_Interface} from "@/generals/generals.types";
import Actual_Profile_Page_Button_Group
    from "@/modules/profile/components/actual-page/profile.actual-page.button-group";
import {Profile_About_Me_Max_Length} from "@/modules/profile/profile.constants";

interface About_Me_Props_Interface {
    about_me: User_Interface['about_me'];
}

export default function Actual_Profile_Page_About_Me({ about_me }: About_Me_Props_Interface) {
    const [is_editing, set_is_editing] = React.useState<boolean>(false);
    const [error, set_error] = React.useState<string | null>(null);
    const [new_about_me, set_new_about_me] = React.useState<string | null>(about_me);
    const about_me_textarea_ref = React.useRef<HTMLTextAreaElement | null>(null);
    React.useEffect(() => {
        if(!is_editing) {
            set_new_about_me(about_me);
        }
        if(is_editing && about_me_textarea_ref.current) {
            about_me_textarea_ref.current.focus();
        }
    }, [is_editing, about_me])
    return (
        <div className={'profile-actual-page-white-box space-y-3'}>
            <div className={'text-2xl text-stroke'}>About Me</div>
            {!is_editing ? (
                <div className={'text-lg'}>
                    { about_me || '-'}
                </div>
            ) : (
                <div>
                    <textarea ref={about_me_textarea_ref} value={new_about_me || ''} onChange={e => set_new_about_me(e.target.value)} className={'border-2 w-full h-40 p-4'} />
                    <div className={'text-sm text-gray-500 tracking-wider'}>{ new_about_me?.length || 0 } / { Profile_About_Me_Max_Length }</div>
                    <div className={'text-red-500 text-sm'}>
                        { error }
                    </div>
                </div>
            )}

            <Actual_Profile_Page_Button_Group is_editing={is_editing} set_is_editing={set_is_editing} set_error={set_error} user_data={{ about_me : new_about_me?.trim() || null }} />
        </div>
    );
}