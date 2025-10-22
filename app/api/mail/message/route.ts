import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req : NextRequest){
    try{
        const formData = await req.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const title = formData.get("title") as string;
        const message = formData.get("message") as string;

        if(!name || !email || !message){
            return NextResponse.json({ 
                message: "Missing data fields" 
            },{ 
                status: 400 
            });
        }

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
            subject: `${title}`,
            text: `Name : ${name}\nEmail : ${email}\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ 
            success: true, 
            message: "Message send successfully!" 
        });
    }
    catch(e){
        return NextResponse.json({ 
            success: false, 
            message: "Failed to send message" 
        },{ 
            status: 500 
        });
    }
}