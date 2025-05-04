import {Gender_Type} from "@/generals/generals.types";

export interface User_Search_Queries_Interface {
    gender?: Gender_Type,
    limit?: number,
    page?: number,
    search?: string
}
