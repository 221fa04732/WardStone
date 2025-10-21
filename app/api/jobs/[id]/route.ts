import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, {params} : { params: { id: string } }) {

    const { id } = params;
    const job = await prisma.jobs.findUnique({
        where : {
            id : id
        }
    })
    if(!job){
        return NextResponse.json({ 
            error: "Job not found" 
        },{ 
            status: 404 
        });
    }
    return NextResponse.json({ 
        job : job
    });
}
