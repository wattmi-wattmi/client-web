import {Genders} from "@/generals/generals.constants";

export interface User_Interface {
    id : number;
    username : string;
    password : string;
    gender : Gender_Type;
    name : string | null;
    region : string | null;
    interests : string | null;
    about_me : string | null;
    status_message : string | null;
    profile : string | null;
    age : number | null;
}

export type Gender_Type = (typeof Genders)[keyof typeof Genders];