import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const {pathname, origin} = req.nextUrl;
    if (pathname == '/') {
        return NextResponse.redirect(`${origin}/login`);
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/'
}