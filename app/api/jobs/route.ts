import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { message } from "telegraf/filters";

export async function GET(){
    const jobs = await prisma.jobs.findMany()
    return NextResponse.json({
        jobs : jobs
    })
}

export async function POST(req : NextRequest){
    const data =await req.json()
    const jobs = await prisma.jobs.create({
        data : {
            jobTitle : data.jobTitle,
            jobDescription : data.jobDescription,
            jobTags : data.jobTags
        }
    })
    return NextResponse.json({
        jobs
    })
}