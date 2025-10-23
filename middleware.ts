import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest){
    try{
        const token = request.cookies.get("token")?.value as string;
        if(token){
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    catch(e){
        return NextResponse.redirect(new URL('/admin/login', request.url))
    }
}

export const config = {
    matcher: ["/admin/newJob", "/admin/newNews"]
}