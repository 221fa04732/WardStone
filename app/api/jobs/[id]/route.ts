import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req : NextRequest, context: { params: Promise<{ id: string }> }) {
    try{
        const  { id }  = await context.params;
        const job = await prisma.jobs.findUnique({
            where : {
                id
            }
        })
        if(job){
            return NextResponse.json({ 
                job : job
            });
        }
    }
    catch(e){
        return NextResponse.json({ 
            success: false,
            message : "Failed to fetch job"
        },{ 
            status: 500 
        });
    }
}
