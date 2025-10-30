"use client"

import { useState, useRef, useEffect } from "react"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"
import axios from "axios"
import Link from "next/link"
import { User } from "lucide-react"

export default function NewJob() {
    const [jobTitle, setJobTitle] = useState("")
    const [jobDescription, setJobDescription] = useState<string[]>([])
    const [jobTags, setJobTags] = useState<string[]>([])
    const [descInput, setDescInput] = useState("")
    const [tagInput, setTagInput] = useState("")
    const [loading, setLoading] = useState(false)

    const titleRef = useRef<HTMLTextAreaElement>(null)

    const autoResize = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
        if (ref.current) {
            ref.current.style.height = "auto"
            ref.current.style.height = `${ref.current.scrollHeight}px`
        }
    }

    useEffect(() => {
        autoResize(titleRef)
    }, [jobTitle])

    const addDescription = () => {
        if (descInput.trim() !== "") {
            setJobDescription((prev) => [...prev, descInput.trim()])
            setDescInput("")
        }
    }

    const removeDescription = (index: number) => {
        setJobDescription((prev) => prev.filter((_, i) => i !== index))
    }

    const addTag = () => {
        if (tagInput.trim() !== "") {
            setJobTags((prev) => [...prev, tagInput.trim()])
            setTagInput("")
        }
    }

    const removeTag = (index: number) => {
        setJobTags((prev) => prev.filter((_, i) => i !== index))
    }

    const postJob = async () => {
        if (!jobTitle || jobDescription.length === 0 || jobTags.length === 0) {
            toast.warning("Please fill all fields before posting.")
            return
        }
        setLoading(true)
        try {
            const res = await axios.post("/api/jobs", {
                jobTitle,
                jobDescription,
                jobTags,
            })
            if(res.status != 200){
                toast.warning(res.data.message)
                setTimeout(()=>{
                    window.location.href='/admin/login'
                },1000)
                return;
            }
            toast.success(res.data.message || "Job posted successfully!")
            setJobTitle("")
            setJobDescription([])
            setJobTags([])
        } 
        catch {
            toast.error("Server error, please try again.")
        } 
        finally {
            setLoading(false)
        }
    }

    return (<div className="w-full min-h-screen px-6 py-10 flex justify-center">
        <div className="w-11/12">
            <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start mb-10 border-b border-gray-800 pb-4 gap-2">
                <div className="rubik md:text-4xl text-2xl font-bold">Post a Job</div>
                <div className="flex justify-start items-center gap-2">
                    <Link href={"/admin"} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all cursor-pointer">
                        <User size={16} /> Return to Admin
                    </Link>
                    <button onClick={postJob} disabled={loading} className={`px-5 py-2 rounded-full font-medium transition-all ${loading ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-white text-black hover:bg-gray-200 cursor-pointer"}`}>
                        {loading ? (<div className="flex justify-center items-center gap-2">Posting<Spinner className="size-5 text-blue-500" /></div>) : ( "Post")}
                    </button>
                </div>
            </div>
            <textarea ref={titleRef} placeholder="Enter job title" value={jobTitle} onChange={(e) => {
                setJobTitle(e.target.value)
                autoResize(titleRef)
            }} className="w-full text-4xl font-semibold bg-transparent border-none focus:outline-none text-white placeholder-gray-500 mb-6 resize-none leading-tight" rows={1}/>
           <div className="mb-10">
                <div className="text-xl font-semibold mb-4 text-gray-100">Job Description</div>
                <div className="flex md:flex-row flex-col gap-3 mb-4">
                    <input type="text" placeholder="Add job description" value={descInput} onChange={(e) => setDescInput(e.target.value)}  className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-100 placeholder-gray-400"/>
                    <button onClick={addDescription} className="bg-green-500 px-6 py-3 rounded-lg font-medium cursor-pointer">Add</button>
                </div>
                <ul className="space-y-3">
                    {jobDescription.map((desc, i) => (
                        <li key={i} className="flex justify-between items-center border border-gray-700 px-4 py-3 rounded-xl">
                            <span className="text-gray-200">{desc}</span>
                            <button onClick={() => removeDescription(i)} className="text-red-400 px-2 py-1 rounded-md text-sm cursor-pointer">Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="text-xl font-semibold mb-4 text-gray-100">Job Tags</div>
                <div className="flex md:flex-row flex-col gap-3 mb-4">
                    <input type="text" placeholder="Add a tag (e.g. React, Node.js)" value={tagInput} onChange={(e) => setTagInput(e.target.value)} className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-100 placeholder-gray-400"/>
                    <button onClick={addTag} className="bg-green-500 px-6 py-3 rounded-lg font-medium cursor-pointer">Add</button>
                </div>
                <div className="flex flex-wrap gap-3">
                    {jobTags.map((tag, i) => (
                        <div key={i} className="border border-gray-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                            <span className="text-gray-200">{tag}</span>
                            <button onClick={() => removeTag(i)}  className="text-red-400 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                            > ✕ </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)}