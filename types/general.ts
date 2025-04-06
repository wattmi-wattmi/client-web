import { Genders } from "@/constants/general"

export interface ISuccessResponse<T> {
    data : T, 
    access_token? : string
    refresh_token? : string
}

export interface IErrorResponse {
    message : string
}

export type TGender = (typeof Genders)[keyof typeof Genders];