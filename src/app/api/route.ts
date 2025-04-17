import {NextResponse} from "next/server";

export async function GET() {
    return NextResponse.json({ data: 'health check', status : 200});
}