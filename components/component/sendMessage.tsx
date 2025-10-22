"use client"

import {
    DrawerClose,
    DrawerFooter
} from "@/components/ui/drawer"
import { Spinner } from "../ui/spinner"
import { useState } from "react"
import { toast } from "sonner"
import axios from "axios"

export default function SendMessage(){

    const [loading, setLoading] = useState(false)

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        try {
            const response = await axios.post("/api/mail/message", formData)
            if(response){
                if(response.status!=200){
                    toast.warning(response.data.message)
                    return;
                }
                toast.success(response.data.message)
                return;
            }
        }
        catch(e){
            toast.error("Server Error")
            return;
        } 
        finally{
            setLoading(false);
        }
    };

    return(<form onSubmit={sendMessage} className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start gap-4">
            <label className="w-full text-gray-300">
                <span className="block mb-1 font-medium">Your Name<span className="text-red-600">*</span></span>
                <input type="name" name="name" placeholder="example" required className="w-full px-2 py-1 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"/>
            </label>
            <label className="w-full text-gray-300">
                <span className="block mb-1 font-medium">Your Email<span className="text-red-600">*</span></span>
                <input type="email" name="email" placeholder="you@example.com" required className="w-full px-2 py-1 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"/>
            </label>
            <label className="w-full text-gray-300">
                <span className="block mb-1 font-medium">Your Message<span className="text-red-600">*</span></span>
                <textarea name="message" placeholder="Write something about yourself..." required className="w-full h-36 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none placeholder-gray-400" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}/>
            </label>
        </div>
        <DrawerFooter className="w-full flex flex-row justify-center items-center gap-2">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 font-medium rounded-sm transition-all duration-200 cursor-pointer disabled:opacity-60 w-40 h-8 flex justify-center items-center">{loading ? <span className="flex justify-center items-center gap-2">Please wait<Spinner /></span> : "Send message"}</button>
            <DrawerClose className="cursor-pointer w-20 h-8 bg-red-500 px-4 py-2 hover:bg-red-600 font-medium rounded-sm transition-all duration-200  disabled:opacity-60 flex justify-center items-center">Close</DrawerClose>
        </DrawerFooter>
    </form>)
}