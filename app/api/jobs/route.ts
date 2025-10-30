import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    try{
        const jobs = await prisma.jobs.findMany({
            where : {
                isDeleted : false
            },
            orderBy : {
                jobPostedDate : 'desc'
            }
        })
        if(jobs){
            return NextResponse.json({
                jobs : jobs
            })
        }
    }
    catch(e){
        return NextResponse.json({ 
            success: false,
        },{ 
            status: 500 
        });
    }
}

export async function POST(req : NextRequest){
    try{
        const data =await req.json()
        const jobs = await prisma.jobs.create({
            data : {
                jobTitle : data.jobTitle,
                jobDescription : data.jobDescription,
                jobTags : data.jobTags
            }
        })
        return NextResponse.json({
            message : "Job posted successfully!",
            job : jobs
        })
    }
    catch(e){
        return NextResponse.json({ 
            success: false,
            message : "Failed to post job"
        },{ 
            status: 500 
        });
    }
}