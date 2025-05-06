'use client';

import React from "react";
import {User_Interface} from "@/generals/generals.types";
import Actual_Profile_Page_Button_Group
    from "@/modules/profile/components/actual-page/profile.actual-page.button-group";
import {Icon} from "@iconify/react";

interface Interests_Props_Interface {
    interests: User_Interface['interests'];
    is_own_profile : boolean;
}

export default function Actual_Profile_Page_Interests({ interests, is_own_profile }: Interests_Props_Interface) {
    const [is_editing, set_is_editing] = React.useState<boolean>(false);
    const [error, set_error] = React.useState<string | null>(null);
    const [new_interests, set_new_interests] = React.useState<string | null>(interests);
    const interest_input_ref = React.useRef<HTMLInputElement | null>(null);
    React.useEffect(() => {
        if(!is_editing) {
            set_new_interests(interests);
        }
        if(is_editing && interest_input_ref.current) {
            interest_input_ref.current.focus();
        }
    }, [ is_editing, interests ])
    return (
        <div className={'profile-actual-page-white-box space-y-3'}>
            <div className={'text-stroke text-2xl'}>interests</div>
            {!new_interests || new_interests.length < 1 ? (
                <div>
                    -
                </div>
            ) : (
                <Interests_Renderer interests={interests_string_to_array(new_interests)} is_editing={is_editing} set_new_interests={set_new_interests} />
            )}
            {is_editing && (
                <div className={'space-y-2'}>
                    <div>
                        <input ref={interest_input_ref} type={'text'} className={'input'} value={new_interests || ''} onChange={e => set_new_interests(e.target.value)} />
                    </div>
                    <div className={'text-sm text-gray-500'}>
                        use comma &quot;,&quot; to separate interests. eg: interest 1,interest 2
                    </div>
                </div>
            )}
            <div className={'text-red-500 text-sm'}>{ error }</div>
            { is_own_profile && <Actual_Profile_Page_Button_Group is_editing={is_editing} set_is_editing={set_is_editing} set_error={set_error} user_data={{ interests : new_interests }} /> }
        </div>
    )

    function interests_string_to_array ( interests : string ) {
        const interests_array = interests.split(',');
        if(interests_array.length < 1) return [];
        const filtered_interests = interests_array.filter(interest => interest.trim().length > 0);
        return filtered_interests.map((item, i) => {
            return {
                id : (new Date().getTime()) + i,
                name : item.trim()
            }
        });
    }
}
function Interests_Renderer ( { interests, is_editing, set_new_interests } : { interests : { id : number, name : string }[], is_editing : boolean, set_new_interests : React.Dispatch<React.SetStateAction<string | null>> & { $$typeof?: symbol} } ) {
   return (
       <div className={'w-full flex items-center flex-wrap gap-2'}>
           {interests.map((interest, i) => (
               <div key={i} className={'border-2 flex items-stretch'}>
                   <div className={'bg-primary-yellow px-3 py-1 text-nowrap'}>
                       {interest.name}
                   </div>
                   { is_editing && (
                       <div onClick={() => handle_delete_interest(interest.id)} className={'bg-white border-s-2 cursor-pointer'}>
                           <Icon icon={'entypo:cross'} className={'text-3xl'} />
                       </div>
                   )}
               </div>
           ))}
       </div>
   );
   function handle_delete_interest(id : number) {
       const new_interests = interests.filter(interest => interest.id !== id);
       set_new_interests(new_interests.map(interest => interest.name).join(','));
   }
}