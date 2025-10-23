import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export async function middleware(request: NextRequest){
    try{
        const token = request.cookies.get("token")?.value as string;
        const data = jwt.verify(token, process.env.JWT_SECRET as string) as { password : string, secret : string }
        if(data.secret != process.env.ADMIN_SECRET || data.password != process.env.ADMIN_PASSWORD){
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