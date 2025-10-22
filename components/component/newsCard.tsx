import { newsType } from "./newsPost";
import time from "@/lib/time";
import Link from "next/link";

export default function NewsCard({data} : {data : newsType}){
    return(<Link href={`/news/${data.id}`} className="w-11/12 max-w-[1250px] h-full flex flex-col justify-center items-start gap-6 bg-[#090909] md:p-6 p-3 rounded-lg hover:scale-101 hover:border-b hover:border-r hover:border-blue-500 cursor-pointer">
        <div className="text-xl md:text-2xl font-semibold">{data.newsTitle}</div>
        <div className="w-full flex md:flex-row flex-col md:justify-between justify-center md:items-end items-start gap-1">
            <div className="flex flex-col justify-center items-start">
                <div className="rubik text-lg font-semibold">{data.newsAuthor}</div>
                <div className="text-white/50 tetx-sm">{data.newsAuthorDesignation}</div>
            </div>
            <div className="flex justify-center items-center gap-1 text-sm text-white/50"><div className="min-h-2 min-w-2 max-h-2 max-w-2 rounded-full bg-green-500"></div>{time(data.newsPostedDate.toString())}</div>
        </div>
    </Link>)
}