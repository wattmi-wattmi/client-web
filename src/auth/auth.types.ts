import {Gender_Type} from "@/generals/generals.types";

export interface Login_Interface {
    username : string;
    password : string;
}
export interface Register_Interface {
    username : string;
    password : string;
    gender : Gender_Type;
}
