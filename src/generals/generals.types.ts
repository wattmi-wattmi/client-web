import {Genders} from "@/generals/generals.constants";

export interface User_Interface_Without_Id_Username_Password {
    gender : Gender_Type;
    name : string | null;
    region : string | null;
    interests : string | null;
    about_me : string | null;
    status_message : string | null;
    profile : string | null;
    age : number | null;
}
export interface User_Interface extends User_Interface_Without_Id_Username_Password {
    id : number;
    username : string;
    password : string;
}

export interface Response_Interface<T> {
    success : boolean;
    message : string;
    data : T | null;
    error : unknown;
    token : string | null,
    pagination : Pagination_Interface | null
}

export interface Pagination_Interface {
    total : number;
}
export type Gender_Type = (typeof Genders)[keyof typeof Genders];