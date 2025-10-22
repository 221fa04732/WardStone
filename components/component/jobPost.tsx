"use client"

import JobCard from "./jobCard"
import { useState, useEffect } from "react"
import axios from "axios"
import Loading from "./loading"
import Error from "./error"

export type jobType = {
    id : string,
    jobTitle: string,
    jobDescription: string[],
    jobTags: string[],
    jobPostedDate: any
}

export default function JobPost(){
    const [jobs, setJobs] = useState<jobType[]>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState<Boolean>(false)

    const fetchJobs = async()=>{
        setError(false)
        setLoading(true)
        try{
            const job = await axios.get(`/api/jobs`)
            if(job){
                setJobs(job.data.jobs)
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
        fetchJobs()
    },[])

    if(loading){
        return(<div className="w-11/12 flex flex-col justify-center items-start gap-16 py-16">
            <div className="rubik text-xl md:text-3xl font-semibold border-b">Open positions</div>
            <Loading data={"Please wait! Fetching all jobs"} height="h-32"/>
        </div>
    )}

    if(error){
        return(<div className="w-11/12 flex flex-col justify-center items-start gap-16 py-16">
            <div className="rubik text-xl md:text-3xl font-semibold border-b">Open positions</div>
            <Error data={"Error while finding jobs, Please retry!"} height="h-32" fn={fetchJobs}/>
        </div>
    )}

    return(<div id="open-role" className="w-11/12 flex flex-col justify-center items-start gap-16 py-16">
        <div className="rubik text-xl md:text-3xl font-semibold border-b">Open positions</div>
        <div className="w-full flex flex-col justify-center items-start gap-10">
            {jobs && jobs.length > 0 ? jobs.map((item : jobType, index : number)=>(
                <JobCard key={index} data={item} />
            )) : <div className="w-full text-center">Currently, we don’t have any job openings</div>}
        </div>
    </div>)
}