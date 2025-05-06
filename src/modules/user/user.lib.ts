import {Api_Routes, Env_Configs} from "@/generals/generals.constants";
import {get_fetch_return_object} from "@/generals/generals.lib";
import {User_Interface} from "@/generals/generals.types";

export async function fetch_user_by_username (username : string) {
    const url = `${Env_Configs.api_domain}${Api_Routes.users.by_username(username)}`;
    try {
        const response = await fetch(url, {
            credentials : 'include',
            next : { revalidate : 60 * 5 }
        });
        return (await get_fetch_return_object<User_Interface>(response));
    } catch (e) {
        console.log(e);
        return (await get_fetch_return_object<null>(null, 'User not found'));
    }
}