import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(req : NextRequest, context: { params: Promise<{ id: string }> }){
    const { id } = await context.params;
    const news = await prisma.news.findUnique({
        where : {
            id
        }
    })
    if(!news){
        return NextResponse.json({ 
            error: "Job not found" 
        },{ 
            status: 404 
        });
    }
    return NextResponse.json({ 
        news : news
    });
}