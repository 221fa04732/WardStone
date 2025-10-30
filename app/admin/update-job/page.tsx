"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import JobUpdateCard from "@/components/component/jobUpdateCard"
import Loading from "@/components/component/loading"
import Error from "@/components/component/error"
import { User } from "lucide-react"
import Link from "next/link"
import { jobType } from "@/components/component/jobPost"

export default function UpdateJobs(){

    const [job, setJob] = useState<jobType[]>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState<Boolean>(false)

    const fetchJob = async()=>{
        setError(false)
        setLoading(true)
        try{
            const response = await axios.get(`/api/jobs`)
            if(response){
                setJob(response.data.jobs)
            }  
        }
        catch(e){
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchJob()
    },[])

    if(loading){return(<Loading data={"Please wait! Fetching all jobs"} height="h-screen"/>)}

    if(error){return(<Error data={"Error while finding jobs, Please retry!"} height="h-screen" fn={fetchJob}/>)}
    
    return(<div className="w-full min-h-screen flex flex-col justify-center items-center gap-6">
        <Link href={"/admin"} className="absolute top-8 right-8 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all cursor-pointer">
            <User size={16} /> Return to Admin
        </Link>
        <div className="w-full my-24 flex flex-col justify-center items-center gap-6">
            {job && job.length > 0 ? job.map((item : jobType, index : number)=>(
                <JobUpdateCard key={index} data={item}/>
            )) : <div className="w-full h-full flex justify-center items-center">No news at the moment. Stay tuned!</div>}
        </div>
    </div>)
}