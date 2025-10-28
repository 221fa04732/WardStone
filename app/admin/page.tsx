"use client";

import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ArrowRight, LogOut, House } from "lucide-react";

export default function Admin(){
    const router = useRouter();
    const handleLogout = async () => {
        try{
            const response = await axios.get("/api/admin/logout",{ 
                withCredentials: true 
            });
            setTimeout(()=>{
                window.location.href = "/admin";
            },1000)
            toast.success(response.data.message)
            return;
        } 
        catch(e){
            toast.success("Failed to logout")
        }
    };

    return (<div className="min-h-screen flex flex-col justify-center items-center px-6 py-12 relative">
        <button onClick={handleLogout} className="absolute top-8 right-8 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"><LogOut size={16} />Logout</button>
        <Link className="absolute top-8 right-38 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all cursor-pointer" href={'/'}><House size={16} />Return to home</Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide mt-12">Admin Control Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
            <Link href="/admin/new-news" className="group bg-[#00152f] p-8 rounded-2xl border border-blue-900 shadow-lg hover:bg-[#00204a] hover:shadow-blue-700/30 transition-all duration-300 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">Post News</h2>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">Create and publish the latest company updates or mission announcements for your audience.</p>
                </div>
                <ArrowRight className="text-blue-400 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/admin/new-job" className="group bg-[#00152f] p-8 rounded-2xl border border-blue-900 shadow-lg hover:bg-[#00204a] hover:shadow-blue-700/30 transition-all duration-300 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">Add New Job</h2>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">Post new job openings and manage recruitment opportunities for your company.</p>
                </div>
                <ArrowRight className="text-blue-400 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/admin/update-news" className="group bg-[#00152f] p-8 rounded-2xl border border-blue-900 shadow-lg hover:bg-[#00204a] hover:shadow-blue-700/30 transition-all duration-300 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">Update News</h2>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">Edit previously published news to keep your audience informed with the latest details.</p>
                </div>
                <ArrowRight className="text-blue-400 group-hover:translate-x-2 transition-transform" />
            </Link><Link href="/admin/update-job" className="group bg-[#00152f] p-8 rounded-2xl border border-blue-900 shadow-lg hover:bg-[#00204a] hover:shadow-blue-700/30 transition-all duration-300 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">Update Job</h2>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">Modify existing job listings to update requirements, roles, or other important details.</p>
                </div>
                <ArrowRight className="text-blue-400 group-hover:translate-x-2 transition-transform" />
            </Link><Link href="/admin/delete-news" className="group bg-[#00152f] p-8 rounded-2xl border border-blue-900 shadow-lg hover:bg-[#00204a] hover:shadow-blue-700/30 transition-all duration-300 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">Delete News</h2>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">Remove outdated or irrelevant news articles to maintain a clean and current news feed.</p>
                </div>
                <ArrowRight className="text-blue-400 group-hover:translate-x-2 transition-transform" />
            </Link><Link href="/admin/delete-job" className="group bg-[#00152f] p-8 rounded-2xl border border-blue-900 shadow-lg hover:bg-[#00204a] hover:shadow-blue-700/30 transition-all duration-300 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">Delete Job</h2>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">Remove closed or filled job positions to keep your career listings organized and up to date.</p>
                </div>
                <ArrowRight className="text-blue-400 group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>
        <div className="w-full border-t border-white/50 mt-12"></div>
        <p className="text-gray-500 text-sm mt-12 text-center">© 2025 Wardstone. All rights reserved.</p>
    </div>
)}
