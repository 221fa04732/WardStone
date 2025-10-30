import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import jwt from 'jsonwebtoken'

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
        await prisma.jobs.update({
            data : {
                isDeleted : true
            },
            where : {
                id : data.id
            }
        })
        return NextResponse.json({
            message : "Job deleted successfully!"
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