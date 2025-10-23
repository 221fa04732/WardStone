import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const name = formData.get("name") as string
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        const resumeFile = formData.get("resume") as File | null;
        const jobId = formData.get("jobId") as string;
        const jobTitle = formData.get("jobTitle") as string

        if(!name || !email || !message || !resumeFile || !jobId || !jobTitle){
            return NextResponse.json({ 
                message: "Missing data fields" 
            },{ 
                status: 201
            });
        }

        const arrayBuffer = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.MY_EMAIL,
            subject: `New Job Application for ${jobTitle}`,
            text: `Name : ${name}\nEmail : ${email}\nJobID : ${jobId}\n\n${message}`,
            attachments: [{
                filename: resumeFile.name,
                content: buffer,
            }],
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ 
            success: true, 
            message: "Job applied successfully!" 
        });
    } 
    catch(e){
        return NextResponse.json({ 
            success: false, 
            message: "Failed to apply job" 
        },{ 
            status: 500 
        });
    }
}
