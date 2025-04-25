import {Api_Routes, Env_Configs} from "@/generals/generals.constants";
import {Response_Interface, User_Interface} from "@/generals/generals.types";
import {Login_Interface, Register_Interface} from "@/auth/auth.types";

export async function fetch_login({ username, password } : Login_Interface) {
    const url = `${Env_Configs.api_domain}${Api_Routes.auth.login()}`;
    console.log('url', url);
    try {
        const response = await fetch(url, {
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username,
                password
            })
        });
        const data = (await response.json()) as Response_Interface<User_Interface>;
        if(data.success) {
            return { data : data.data as User_Interface, error : null };
        } else {
            return { data : null, error : data.message };
        }
    } catch(e) {
        console.log('error logging in', e);
        return { data : null, error : 'error logging in'};
    }
}
export async function fetch_register({ username, password, gender } : Register_Interface) {
    const url = `${Env_Configs.api_domain}${Api_Routes.auth.register()}`;
    try {
        const response = await fetch(url, {
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username,
                password,
                gender
            })
        });
        const data = (await response.json()) as Response_Interface<User_Interface>;
        if(data.success) {
            return { data : data.data as User_Interface, error : null };
        } else {
            return { data : null, error : data.message };
        }
    } catch(e) {
        console.log('error registering', e);
        return { data : null, error : 'error registering'};
    }
}
export async function fetch_logout() {
    const url = `${Env_Configs.api_domain}${Api_Routes.auth.logout()}`;
    try {
        const response = await fetch(url, {
            method : 'POST',
            credentials : 'include'
        });
        return response.ok
    } catch(e) {
        console.log('error fetching me', e);
        return false;
    }
}

export async function fetch_check_username(username : string) {
    const url = `${Env_Configs.api_domain}${Api_Routes.auth.check_username()}`;
    try {
        const response = await fetch(url, {
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username
            })
        });
        const data = (await response.json()) as Response_Interface<string>;
        if(data.success) {
            return { data : data.message as string, error : null };
        } else {
            return { data : null, error : data.message };
        }
    } catch(e) {
        console.log('error checking username', e);
        return { data : null, error : 'error checking username'};
    }
}
