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
        return(<Loading data={"Please wait! Fetching job details"} />)
    }

    if(error){
        return(<Error data={"Job not found, Please retry!"}/>)
    }

    return(<div className='w-full min-h-screen flex flex-col justify-start items-center'>
        <Navbar />
        <JobDetail job={job} />
        <Footer />
    </div>)
}