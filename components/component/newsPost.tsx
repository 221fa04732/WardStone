"use client"

import NewsCard from "./newsCard"
import { useState, useEffect } from "react"
import axios from "axios"
import Loading from "./loading"
import Error from "./error"

export type newsType = {
    newsTitle : string,
    newsDescription : string,
    newsAuthor : string,
    newsAuthorDesignation : string,
    newsPostedDate : any
}

export default function NewsPost(){

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

    if(loading){return(<Loading data={"Please wait! Fetching all news"} height="h-96"/>)}

    if(error){return(<Error data={"Error while finding news, Please retry!"} height="h-96"/>)}
    
    return(<div className="relative w-full flex flex-col justify-center items-center gap-4 my-16">
        {news && news.length > 0 ? news.map((item : newsType, index : number)=>(
            <NewsCard key={index} data={item}/>
        )) : <div className="w-full h-64 flex justify-center items-center">No news at the moment. Stay tuned!</div>}
        <div className={`absolute bg-sky-400 blur-3xl opacity-20 h-[300px] w-[300px] rounded-full -z-10`}></div>
    </div>)
}