"use client"

import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"
import Link from "next/link"
import { User } from "lucide-react";

export default function NewNews() {
    const [newsAuthor, setNewsAuthor] = useState("")
    const [newsAuthorDesignation, setNewsAuthorDesignation] = useState("")
    const [newsTitle, setNewsTitle] = useState("")
    const [newsDescription, setNewsDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const titleRef = useRef<HTMLTextAreaElement>(null)
    const bodyRef = useRef<HTMLTextAreaElement>(null)

    const autoResize = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
        if (ref.current) {
            ref.current.style.height = "auto"
            ref.current.style.height = `${ref.current.scrollHeight}px`
        }
    }

    useEffect(() => {
        autoResize(titleRef)
    }, [newsTitle])

    useEffect(() => {
        autoResize(bodyRef)
    }, [newsDescription])

    const postBlog = async () => {
        if (!newsTitle || !newsDescription || !newsAuthor || !newsAuthorDesignation) {
            toast.warning("Please fill in all fields before publishing.")
            return
        }

        setLoading(true)
        try {
            const response = await axios.post("/api/news", {
                newsTitle,
                newsDescription,
                newsAuthor,
                newsAuthorDesignation,
            })
            toast.success(response.data.message || "Blog published successfully!")
            setNewsAuthor("")
            setNewsAuthorDesignation("")
            setNewsTitle("")
            setNewsDescription("")
        } 
        catch (e) {
            toast.error("Server error. Please try again.")
        } 
        finally {
            setLoading(false)
        }
    }

    return (<div className="w-full min-h-screen bg-[#00000c] text-gray-100 px-6 py-10 flex justify-center">
        <div className="w-11/12">
            <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start mb-10 border-b border-gray-800 pb-4 gap-2">
                <div className="rubik md:text-4xl text-2xl font-bold">Write your News</div>
                <div className="flex justify-start items-center gap-2">
                    <Link href={'/admin'} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"><User size={16} />Return to admin</Link>
                    <button onClick={postBlog} disabled={loading} className={`px-5 py-2 rounded-full font-medium transition-all ${loading ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-white text-black hover:bg-gray-200 cursor-pointer"}`}>
                        {loading ? (<div className="flex justify-center items-center gap-2">Publishing <Spinner className="size-5 text-blue-500" /></div>) : ("Publish")}
                    </button>
                </div>
            </div>
            <div className="mb-8 flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Your name" value={newsAuthor} onChange={(e) => setNewsAuthor(e.target.value)} className="bg-transparent border-b border-gray-700 focus:border-gray-400 outline-none py-2 text-lg flex-1"/>
                <input type="text" placeholder="Your designation (e.g. Engineer)" value={newsAuthorDesignation}
                onChange={(e) => setNewsAuthorDesignation(e.target.value)} className="bg-transparent border-b border-gray-700 focus:border-gray-400 outline-none py-2 text-lg flex-1"/>
            </div>
            <textarea ref={titleRef} placeholder="Title of your news" value={newsTitle} onChange={(e) => {
                setNewsTitle(e.target.value)
                autoResize(titleRef)
            }}className="w-full text-4xl font-semibold bg-transparent border-none focus:outline-none text-white placeholder-gray-500 mb-6 resize-none leading-tight"rows={1}/>
            <textarea ref={bodyRef}placeholder="Start writing your story" value={newsDescription} onChange={(e) => {
                setNewsDescription(e.target.value)
                autoResize(bodyRef)
            }} className="w-full bg-transparent text-lg text-gray-200 placeholder-gray-600 resize-none focus:outline-none leading-relaxed min-h-[300px]" rows={6}/>
        </div>
    </div>
)}
