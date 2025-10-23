import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function POST(req : NextRequest){
    try{
        const data =await req.json();
        if(!data.secret || !data.password){
            return NextResponse.json({
                success : false,
                message : "Missing credentials"
            },{
                status : 201
            })
        }

        if(data.secret != process.env.ADMIN_SECRET || data.password != process.env.ADMIN_PASSWORD){
            return NextResponse.json({
                success : false,
                message : "Wrong credentials"
            },{
                status : 201
            })
        }

        const token = jwt.sign({ password : data.password, secret : data.secret }, process.env.JWT_SECRET as string)
        const response = NextResponse.json({
            success : true,
            message : "Login successful",
        })
        response.cookies.set({
            name : "token",
            value : token,
            httpOnly : true,
            secure : process.env.NODE_ENV === "production",
            sameSite : "lax",
            path : '/'
        })
        return response;
    }
    catch(e){
        return NextResponse.json({ 
            success: false, 
            message: "Failed to login" 
        },{ 
            status: 500 
        });
    }
}