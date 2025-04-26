'use client';

import React from "react";
import Actual_Profile_Page_Button_Group
    from "@/modules/profile/components/actual-page/profile.actual-page.button-group";

export default function Actual_Profile_Page_Name({name}: { name: string }) {
    const [ is_editing, set_is_editing ] = React.useState<boolean>(false);
    const [ new_name, set_new_name ] = React.useState<string>(name);
    const input_ref = React.useRef<HTMLInputElement | null>(null);
    const [ error, set_error ] = React.useState<string | null>(null);
    React.useEffect(() => {
        if(!is_editing) set_new_name(name);
        if(is_editing && input_ref.current) {
            input_ref.current.focus();
        }
    }, [is_editing, name]);
    return (
        <div className={'profile-actual-page-white-box'}>
            { is_editing ? (
                <div>
                    <input type={'text'} ref={input_ref} value={new_name} onChange={e => set_new_name(e.target.value)} className={'border-none outline-none text-2xl font-semibold'} />
                </div>
            ) : (
                <div className={'text-2xl font-semibold'}>
                    {name}
                </div>
            )}
            <div className={'text-red-500 text-sm'}>
                { error }
            </div>
            <Actual_Profile_Page_Button_Group is_editing={is_editing} set_is_editing={set_is_editing} set_error={set_error} user_data={{name: new_name}} />
        </div>
    );
}