import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    const news = await prisma.news.findMany()
    return NextResponse.json({
        news : news
    })
}

export async function POST(req : NextRequest){
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
        news
    })
}