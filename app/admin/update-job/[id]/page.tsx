"use client"

import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import { jobType } from "@/components/component/jobPost"
import Loading from "@/components/component/loading"
import Error from "@/components/component/error"
import { useRef } from "react"
import { User } from "lucide-react"
import Link from "next/link"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"

export default function UpdateUniqueJob(){

    const param = useParams()
    const [getLoading, setGetLoading] = useState<Boolean>(true)
    const [getError, setGetError] = useState<Boolean>(false)
    const [job, setJob] = useState<jobType | null >(null)
    const [updateLoader, setUpdateLoader] = useState(false)
    const [descInput, setDescInput] = useState("")
    const [tagInput, setTagInput] = useState("")
    const [jobDescription, setJobDescription] = useState<string[]>([])
    const [jobTags, setJobTags] = useState<string[]>([])

    const titleRef = useRef<HTMLTextAreaElement>(null)

    const autoResize = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
        if (ref.current) {
            ref.current.style.height = "auto"
            ref.current.style.height = `${ref.current.scrollHeight}px`
        }
    }

    useEffect(() => {
        autoResize(titleRef)
    }, [job?.jobTitle])

    const addDescription = () => {
        if (descInput.trim() !== "") {
            job && setJob({...job, jobDescription : [...job?.jobDescription, descInput.trim()]}) 
            setDescInput("")
        }
    }

    const removeDescription = (index: number) => {
        job && setJob({...job, jobDescription : job.jobDescription.filter((_, i) => i !== index)})
    }

    const addTag = () => {
        if (tagInput.trim() !== "") {
            job && setJob({...job, jobTags : [...job?.jobTags, tagInput.trim()]}) 
            setTagInput("")
        }
    }

    const removeTag = (index: number) => {
        job && setJob({...job, jobTags : job.jobTags.filter((_, i) => i !== index)})
    }

    const updateJobs = async()=>{
        if (!job?.jobTitle || job.jobDescription.length === 0 || job.jobTags.length === 0) {
            toast.warning("Please fill all fields before posting.")
            return
        }
        setUpdateLoader(true)
        try{
            const response = await axios.put(`/api/jobs`,{
                id : job?.id,
                jobTitle : job?.jobTitle,
                jobDescription : job?.jobDescription,
                jobTags : job?.jobTags
            })
            if(response.status != 200){
                toast.warning(response.data.message)
                setTimeout(()=>{
                    window.location.href='/admin/login'
                },1000)
                return;
            }
            toast.success(response.data.message)
        }
        catch(e){
            toast.error("Something went wrong, Please try again!")
        }
        finally{
            setUpdateLoader(false)
        }
    }

    const fetchJobs = async()=>{
        setGetLoading(true)
        setGetError(false)
        try{
            const res = await axios.get(`/api/jobs/${param.id}`)
            if(res){
                setJob(res.data.job)
            }
        }
        catch(e){
            setGetError(true)
        }
        finally{
            setGetLoading(false)
        }
    }

    useEffect(()=>{
        fetchJobs()
    }, [])

    if(getLoading){
        return(<Loading data={"Please wait! Fetching job details"} height='min-h-screen'/>)
    }

    if(getError || job == null){
        return(<Error data={"Job not found, Please retry!"} height='min-h-screen' fn={fetchJobs}/>)
    }

    return (<div className="w-full min-h-screen px-6 py-10 flex justify-center">
        <div className="w-11/12">
            <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start mb-10 border-b border-gray-800 pb-4 gap-2">
                <div className="rubik md:text-4xl text-2xl font-bold">Update Job</div>
                <div className="flex justify-start items-center gap-2">
                    <Link href={"/admin"} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all cursor-pointer">
                        <User size={16} /> Return to Admin
                    </Link>
                    <button onClick={updateJobs} disabled={updateLoader} className={`px-5 py-2 rounded-full font-medium transition-all ${updateLoader ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-white text-black hover:bg-gray-200 cursor-pointer"}`}>
                        {updateLoader ? (<div className="flex justify-center items-center gap-2">Updating<Spinner className="size-5 text-blue-500" /></div>) : ( "Update")}
                    </button>
                </div>
            </div>
            <textarea ref={titleRef} placeholder="Enter job title" value={job.jobTitle} onChange={(e) => {
                setJob({...job, jobTitle : e.target.value})
                autoResize(titleRef)
            }} className="w-full text-4xl font-semibold bg-transparent border-none focus:outline-none text-white placeholder-gray-500 mb-6 resize-none leading-tight" rows={1}/>
            <div className="mb-10">
                <div className="text-xl font-semibold mb-4 text-gray-100">Job Description</div>
                <div className="flex md:flex-row flex-col gap-3 mb-4">
                    <input type="text" placeholder="Add job description" value={descInput} onChange={(e) => setDescInput(e.target.value)}  className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-100 placeholder-gray-400"/>
                    <button onClick={addDescription} className="bg-green-500 px-6 py-3 rounded-lg font-medium cursor-pointer">Add</button>
                </div>
                <ul className="space-y-3">
                    {job.jobDescription.map((desc, i) => (
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
                    {job.jobTags.map((tag, i) => (
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