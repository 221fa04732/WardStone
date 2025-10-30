import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

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
        console.log(e)
        return NextResponse.json({
            message : "Somethings went wrong!"
        },{
            status : 500
        })
    }
}