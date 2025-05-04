'use client';
import User_Card from "@/modules/browse/components/browse.user-card";
import {User_Interface} from "@/generals/generals.types";

interface Props_Interface {
    users : User_Interface[]
}

export default function Browse_Page_User_Card_Container({users}: Props_Interface) {
    if(users.length < 0) return <div>No users found</div>;
    return (
        <div className={'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}>
            {users.map(user => (
                <User_Card user={user} key={user.id}/>
            ))}
        </div>
    )
}

