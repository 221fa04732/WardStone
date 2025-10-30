import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(){
    try{
        const news = await prisma.news.findMany({
            where : {
                isDeleted : false
            },
            orderBy :{
                newsPostedDate : 'desc'
            }
        })
        if(news){
            return NextResponse.json({
                news : news
            })
        }
    }
    catch(e){
        return NextResponse.json({ 
            success: false, 
            message: "Failed to get news" 
        },{ 
            status: 500 
        });
    }
}

export async function POST(req : NextRequest){
    try{
        try{
            const cookies = req.cookies;
            const token = cookies.get("token")?.value;
            const verify = jwt.verify(token as string, process.env.JWT_SECRET as string) as {password : string, secret : string};
            if(token === "" || verify.password != process.env.ADMIN_PASSWORD || verify.secret != process.env.ADMIN_SECRET){
                return NextResponse.json({
                    message : "Invalid token"
                },{
                    status : 201
                })
            }
        }
        catch(e){
            return NextResponse.json({
                message : "Access Denied"
            },{
                status : 201
            })
        }
        
        const data =await req.json()
        const news = await prisma.news.create({
            data : {
                newsTitle : data.newsTitle,
                newsDescription : data.newsDescription,
                newsAuthor : data.newsAuthor,
                newsAuthorDesignation : data.newsAuthorDesignation
            }
        })
        return NextResponse.json({
            message : "News posted successfully!",
            news : news
        })
    }
    catch(e){
        return NextResponse.json({ 
            success: false, 
            message: "Failed to post news" 
        },{ 
            status: 500 
        });
    }
}

export async function PATCH(req : NextRequest){
    try{
        try{
            const cookies = req.cookies;
            const token = cookies.get("token")?.value;
            const verify = jwt.verify(token as string, process.env.JWT_SECRET as string) as {password : string, secret : string};
            if(token === "" || verify.password != process.env.ADMIN_PASSWORD || verify.secret != process.env.ADMIN_SECRET){
                return NextResponse.json({
                    message : "Invalid token"
                },{
                    status : 201
                })
            }
        }
        catch(e){
            return NextResponse.json({
                message : "Access Denied"
            },{
                status : 201
            })
        }
        
        const data = await req.json();
        await prisma.news.update({
            data : {
                isDeleted : true
            },
            where : {
                id : data.id
            }
        })
        return NextResponse.json({
            message : "News deleted successfully!"
        })
    }
    catch(e){
        return NextResponse.json({
            message : "Somethings went wrong!"
        },{
            status : 500
        })
    }
}