import React, {useEffect} from 'react';
import {Gender_Type} from "@/generals/generals.types";
import Actual_Profile_Page_Button_Group
    from "@/modules/profile/components/actual-page/profile.actual-page.button-group";

interface Info_Props_Interface {
    age: number | null;
    region: string | null;
    gender: Gender_Type;
    username: string;
    is_own_profile: boolean;
}

export default function Actual_Profile_Page_Info({age, region, gender, username, is_own_profile}: Info_Props_Interface) {
    const [is_editing, set_is_editing] = React.useState<boolean>(false);
    const [error, set_error] = React.useState<string | null>(null);
    const [new_age, set_new_age] = React.useState<string>(age ? String(age) : '');
    const [new_region, set_new_region] = React.useState<string>(region || '');
    const age_input_ref = React.useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(!is_editing) {
            set_new_age(age ? String(age) : '');
            set_new_region(region || '');
        }
        if(is_editing && age_input_ref.current) {
            age_input_ref.current.focus();
        }
    }, [is_editing, age, region]);

    return (
        <div className={'profile-actual-page-white-box space-y-3'}>
            <div className={'text-stroke text-2xl'}>info</div>
            <div className={'text-lg font-medium text-gray-400'}>username - {username}</div>
            <div className={'text-lg font-medium text-gray-400'}>gender - { gender }</div>
            <div className={'text-lg font-medium flex items-center gap-2'}>
                <span>age - </span>{is_editing
                ? (
                    <input ref={age_input_ref} onChange={e => set_new_age(e.target.value)} value={ new_age } type={'number'} className={'input flex-1'} />
                ) : (
                    <span>{ age }</span>
                )}
            </div>
            <div className={'text-lg font-medium flex items-center gap-2'}>
                <span>region - </span>{is_editing
                ? (
                    <input onChange={e => set_new_region(e.target.value)} value={ new_region } type={'text'} className={'input flex-1'} />
                ) : (
                    <span>{ region }</span>
                )}
            </div>
            <div className={'text-red-500 text-sm'}>{ error }</div>
            { is_own_profile && <Actual_Profile_Page_Button_Group
                is_editing={is_editing}
                set_is_editing={set_is_editing}
                set_error={set_error}
                user_data={{
                    age : new_age ? Number(new_age) : null,
                    region : new_region || null
                }}
            /> }
        </div>
    );
}