import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    try{
        const news = await prisma.news.findMany({
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