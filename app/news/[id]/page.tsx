"use client"

import { useParams } from "next/navigation"
import { newsType } from "@/components/component/newsPost"
import { useState, useEffect } from "react"
import axios from 'axios'
import Loading from "@/components/component/loading"
import Error from "@/components/component/error"
import Navbar from "@/components/component/navbar"
import Footer from "@/components/component/footer"
import NewsDisplay from "@/components/component/newsDisplay"

export default function ReadNews(){
    const param = useParams()
    const id = param.id
    const [news, setNews] = useState<newsType | null>(null)
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState<Boolean>(false)

    const fetchNews = async()=>{
        setError(false)
        setLoading(true)
        try{
            const news = await axios.get(`/api/news/${id}`)
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

    if(loading){
        return(<Loading data={"Please wait! Fetching news for you"} height='min-h-screen'/>)
    }

    if(error){
        return(<Error data={"News not found, Please retry!"} height='min-h-screen' fn={fetchNews}/>)
    }

    return(<div className="w-full flex flex-col justify-center items-center">
        <Navbar />
        <div className="min-h-screen w-11/12 flex flex-col justify-start items-center mt-16 md:mt-32 mb-16">
            <NewsDisplay news={news}/>
        </div>
        <Footer />
    </div>)
}