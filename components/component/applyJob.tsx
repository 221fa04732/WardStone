"use client";

import { useState } from "react";
import Link from "next/link";
import axios from 'axios'
import { Spinner } from "../ui/spinner";
import { toast } from 'sonner'

export default function ApplyJob({ id, jobTitle}: { id?: string , jobTitle? : string}){

    const [loading, setLoading] = useState(false);

    const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        formData.append("jobId", id || "unknown");
        formData.append("jobTitle", jobTitle || "unknown");
        try {
            const response = await axios.post("/api/mail/job", formData, {
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
            })
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

    return(<form onSubmit={sendMail} className="w-full flex flex-col justify-center items-start gap-6 bg-gray-900/40 md:p-6 p-2 rounded-xl border border-white/10 shadow-md">
        <h2 className="text-2xl font-semibold text-white mb-2">Apply for this Job</h2>
        <label className="w-full text-gray-300">
            <span className="block mb-2 font-medium">Your Name<span className="text-red-600">*</span></span>
            <input type="text" name="name" placeholder="example" required className="w-full p-2 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"/>
        </label>
        <label className="w-full text-gray-300">
            <span className="block mb-2 font-medium">Your Email<span className="text-red-600">*</span></span>
            <input type="email" name="email" placeholder="you@example.com" required className="w-full p-2 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"/>
        </label>
        <label className="w-full text-gray-300">
            <span className="block mb-2 font-medium">Your Message<span className="text-red-600">*</span></span>
            <textarea name="message" placeholder="Write something about yourself..." required className="w-full h-64 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-400" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}/>
        </label>
        <label className="w-full text-gray-300">
            <span className="block mb-2 font-medium">
                Upload your resume<span className="text-red-600">*</span> (.pdf)
            </span>
            <input name="resume" type="file" accept=".pdf" required className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"/>
        </label>
        <div className="flex md:flex-row flex-col justify-center md:items-center items-start gap-2">
            <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-60 h-10 w-48 flex justify-center items-center">{loading ? <span className="flex justify-center items-center gap-2">Please wait<Spinner /></span> : "Submit Application"}</button>
            <Link href={"/career#open-role"} className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg cursor-pointer">Cancel</Link>
        </div>
    </form>
)}
