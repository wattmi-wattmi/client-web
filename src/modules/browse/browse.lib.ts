import {Api_Routes, Env_Configs, Genders} from "@/generals/generals.constants";
import {User_Search_Queries_Interface} from "@/modules/browse/browse.types";
import {get_fetch_return_object} from "@/generals/generals.lib";
import {Gender_Type, User_Interface} from "@/generals/generals.types";


export async function fetch_users({gender, limit, page, search}: User_Search_Queries_Interface) {
    try {
        const api_route = Api_Routes.users.all_or_search({gender, page, limit, search});
        const url = `${Env_Configs.api_domain}${api_route}`;
        const response = await fetch(url, {
            credentials : 'include',
            next : {
                revalidate : 10
            }
        });
        return (await get_fetch_return_object<User_Interface[]>(response));
    } catch (e) {
        console.log(e);
        return (await get_fetch_return_object<null>(null));
    }
}

export function get_formatted_user_search_queries (search_params : { [key: string]: string | string[] | undefined }) : User_Search_Queries_Interface {
    return {
        gender : get_gender_from_gender_of_search_params(search_params.gender),
        limit : search_params.limit ? Number(search_params.limit) : undefined,
        page : search_params.page ? Number(search_params.page) : undefined,
        search : search_params.search ? String(search_params.search) : undefined,
    }
}

function get_gender_from_gender_of_search_params(param_gender : string | string[] | undefined) {
    if(!param_gender) return undefined;
    if(typeof param_gender === 'string' && (param_gender === Genders.male || param_gender === Genders.female)) return param_gender as Gender_Type;
    return undefined;
}
