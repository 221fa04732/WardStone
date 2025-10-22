"use client"

import axios from 'axios'
import { useEffect, useState } from 'react'
import { jobType } from '@/components/component/jobPost'
import { useParams } from 'next/navigation'
import Loading from '@/components/component/loading'
import Error from '@/components/component/error'
import JobDetail from '@/components/component/jobDetail'
import Navbar from '@/components/component/navbar'
import Footer from '@/components/component/footer'

export default function JobDetailPage(){  
    const param = useParams()
    const id = param.id
    const [job, setJob] = useState<jobType | null>(null)
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState<Boolean>(false)

    const fetchJob = async()=>{
        setError(false)
        setLoading(true)
        try{
            const job = await axios.get(`/api/jobs/${id}`)
            if(job){
                setJob(job.data.job)
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

    if(loading){
        return(<Loading data={"Please wait! Fetching job details"} height='min-h-screen'/>)
    }

    if(error){
        return(<Error data={"Job not found, Please retry!"} height='min-h-screen' fn={fetchJob}/>)
    }

    return(<div className='relative overflow-hidden w-full min-h-screen flex flex-col justify-start items-center'>
        <Navbar />
        <JobDetail job={job} />
        <div className={`absolute bg-blue-400 blur-3xl opacity-30 md:h-[400px] md:w-[400px] h-[200px] w-[200px] rounded-full -z-10 md:-right-[200px] md:bottom-[900px] -right-[100px] bottom-[1350px]`}></div>
        <Footer />
        <div className={`absolute bg-blue-400 blur-3xl opacity-30 md:h-[400px] md:w-[400px] h-[200px] w-[200px] rounded-full -z-10 md:-left-[200px] md:-bottom-[100px] -left-[100px] -bottom-[50px]`}></div>
    </div>)
}