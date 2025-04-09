import { NextResponse } from "next/server";

export function get_error_response(e: Error, status: number) {
    return NextResponse.json({
        error: {
            message: e.message
        }
    }, { status });
}

export async function get_success_response<T>(data: T, access_token? : string, refresh_token? : string) {
    return NextResponse.json({ data, access_token, refresh_token }, { status: 200 });
}