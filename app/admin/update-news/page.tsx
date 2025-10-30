"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import NewsUpdateCard from "@/components/component/newsUpdateCard"
import Loading from "@/components/component/loading"
import Error from "@/components/component/error"
import { User } from "lucide-react"
import Link from "next/link"
import { newsType } from "@/components/component/newsPost"

export default function UpdateNews(){

    const [news, setNews] = useState<newsType[]>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState<Boolean>(false)

    const fetchNews = async()=>{
        setError(false)
        setLoading(true)
        try{
            const news = await axios.get(`/api/news`)
            if(news){
                setNews(news.data.news)
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
        fetchNews()
    },[])

    if(loading){return(<Loading data={"Please wait! Fetching all news"} height="h-screen"/>)}

    if(error){return(<Error data={"Error while finding news, Please retry!"} height="h-screen" fn={fetchNews}/>)}
    
    return(<div className="w-full min-h-screen flex flex-col justify-center items-center gap-6">
        <Link href={"/admin"} className="absolute top-8 right-8 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all cursor-pointer">
            <User size={16} /> Return to Admin
        </Link>
        <div className="w-full my-24 flex flex-col justify-center items-center gap-6">
            {news && news.length > 0 ? news.map((item : newsType, index : number)=>(
                <NewsUpdateCard key={index} data={item}/>
            )) : <div className="w-full h-full flex justify-center items-center">No news at the moment. Stay tuned!</div>}
        </div>
    </div>)
}