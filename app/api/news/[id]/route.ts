import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(req : NextRequest, context: { params: Promise<{ id: string }> }){
    try{
        const { id } = await context.params;
        const news = await prisma.news.findUnique({
            where : {
                id,
                isDeleted : false
            }
        })
        if(news){
            return NextResponse.json({ 
                news : news
            });
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