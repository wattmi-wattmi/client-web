import {Pagination_Interface, Response_Interface} from "@/generals/generals.types";

export async function get_fetch_return_object<T>(response: Response | null, error_message: string = 'Internal server error') : Promise<{ data: T | null; error: string | null; pagination: Pagination_Interface | null }>  {
    if (!response) {
        return {data: null, error: error_message, pagination: null};
    }
    try {
        const data = (await response.json()) as Response_Interface<T>;
        if (response.ok && data.success) {
            return { data: data.data as T, error: null, pagination: data.pagination };
        } else {
            return { data: null, error: data.message, pagination: data.pagination };
        }
    } catch (e) {
        // fallback in case JSON parse fails or throws
        console.log(e);
        return { data: null, error: (e as Error).message, pagination: null };
    }
}
