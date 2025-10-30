"use client"

import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import { newsType } from "@/components/component/newsPost"
import Loading from "@/components/component/loading"
import Error from "@/components/component/error"
import { useRef } from "react"
import { User } from "lucide-react"
import Link from "next/link"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"

export default function UpdateUniqueNews(){

    const param = useParams()
    const [getLoading, setGetLoading] = useState<Boolean>(true)
    const [getError, setGetError] = useState<Boolean>(false)
    const [news, setNews] = useState<newsType | null>(null)
    const [updateLoader, setUpdateLoader] = useState(false)

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
    }, [news?.newsTitle])

    useEffect(() => {
        autoResize(bodyRef)
    }, [news?.newsDescription])

    const updateNews = async()=>{
        setUpdateLoader(true)
        try{
            const response = await axios.put(`/api/news`,{
                id : news?.id,
                newsTitle : news?.newsTitle,
                newsDescription : news?.newsDescription,
                newsAuthor : news?.newsAuthor,
                newsAuthorDesignation : news?.newsAuthorDesignation
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

    const fetchNews = async()=>{
        setGetLoading(true)
        setGetError(false)
        try{
            const res = await axios.get(`/api/news/${param.id}`)
            if(res){
                setNews(res.data.news)
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
        fetchNews()
    }, [])

    if(getLoading){
        return(<Loading data={"Please wait! Fetching news for you"} height='min-h-screen'/>)
    }

    if(getError || news == null){
        return(<Error data={"News not found, Please retry!"} height='min-h-screen' fn={fetchNews}/>)
    }

    return (<div className="w-full min-h-screen bg-[#00000c] text-gray-100 px-6 py-10 flex justify-center">
        <div className="w-11/12">
            <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start mb-10 border-b border-gray-800 pb-4 gap-2">
                <div className="rubik md:text-4xl text-2xl font-bold">Update your News</div>
                <div className="flex justify-start items-center gap-2">
                    <Link href={'/admin'} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"><User size={16} />Return to admin</Link>
                    <button onClick={updateNews} disabled={updateLoader} className={`px-5 py-2 rounded-full font-medium transition-all ${updateLoader ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-white text-black hover:bg-gray-200 cursor-pointer"}`}>
                        {updateLoader ? (<div className="flex justify-center items-center gap-2">Updating<Spinner className="size-5 text-blue-500" /></div>) : ("Update")}
                    </button>
                </div>
            </div>
            <div className="mb-8 flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Your name" value={news?.newsAuthor} onChange={(e) => setNews({...news, newsAuthor : e.target.value})} className="bg-transparent border-b border-gray-700 focus:border-gray-400 outline-none py-2 text-lg flex-1"/>
                <input type="text" placeholder="Your designation (e.g. Engineer)" value={news.newsAuthorDesignation}
                onChange={(e) => setNews({...news, newsAuthorDesignation : e.target.value})} className="bg-transparent border-b border-gray-700 focus:border-gray-400 outline-none py-2 text-lg flex-1"/>
            </div>
            <textarea ref={titleRef} placeholder="Title of your news" value={news.newsTitle} onChange={(e) => {
                setNews({...news, newsTitle : e.target.value})
                autoResize(titleRef)
            }}className="w-full text-4xl font-semibold bg-transparent border-none focus:outline-none text-white placeholder-gray-500 mb-6 resize-none leading-tight"rows={1}/>
            <textarea ref={bodyRef}placeholder="Start writing your story" value={news.newsDescription} onChange={(e) => {
                setNews({...news, newsDescription : e.target.value})
                autoResize(bodyRef)
            }} className="w-full bg-transparent text-lg text-gray-200 placeholder-gray-600 resize-none focus:outline-none leading-relaxed min-h-[300px]" rows={6}/>
        </div>
    </div>
)}