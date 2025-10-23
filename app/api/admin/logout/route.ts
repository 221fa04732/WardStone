
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const res = NextResponse.json({ success: true, message: "Logged out successfully" });
        res.cookies.set({
            name: "token",
            value: "",
            path: "/"
        });
        return res;
    }
    catch(e){
        return NextResponse.json({ 
            success: false, 
            message: "Failed to logout" 
        },{ 
            status: 500 
        });
    }
}
