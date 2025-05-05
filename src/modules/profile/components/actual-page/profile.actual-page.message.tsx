'use client';
import React from "react";
import {User_Interface} from "@/generals/generals.types";
import Actual_Profile_Page_Button_Group
    from "@/modules/profile/components/actual-page/profile.actual-page.button-group";
import {Profile_Message_Max_Length} from "@/modules/profile/profile.constants";

interface Message_Props_Interface {
    status_message: User_Interface['status_message'];
    is_own_profile : boolean;
}

export default function Actual_Profile_Page_Message({ status_message, is_own_profile }: Message_Props_Interface) {
    const [is_editing, set_is_editing] = React.useState<boolean>(false);
    const [error, set_error] = React.useState<string | null>(null);
    const [new_status_message, set_new_status_message] = React.useState<string | null>(status_message);
    const status_message_textarea_ref = React.useRef<HTMLTextAreaElement | null>(null);
    React.useEffect(() => {
        if(!is_editing) {
            set_new_status_message(status_message);
        }
        if(is_editing && status_message_textarea_ref.current) {
            status_message_textarea_ref.current.focus();
        }
    }, [is_editing, status_message])
    return (
        <div className={'profile-actual-page-white-box space-y-3'}>
            <div className={'text-2xl text-stroke'}>Message</div>
            {!is_editing ? (
                <div>
                    { status_message || '-' }
                </div>
            ) : (
                <div>
                    <textarea ref={status_message_textarea_ref} value={new_status_message || ''} onChange={e => set_new_status_message(e.target.value)} className={'border-2 w-full h-40 p-4'} />
                    <div className={'text-sm text-gray-500 tracking-wider'}>{ new_status_message?.length || 0 } / { Profile_Message_Max_Length }</div>
                    <div className={'text-red-500 text-sm'}>
                        { error }
                    </div>
                </div>
            )}
            { is_own_profile && <Actual_Profile_Page_Button_Group is_editing={is_editing} set_is_editing={set_is_editing} set_error={set_error} user_data={{ status_message : new_status_message?.trim() || null }} /> }
        </div>
    )
}