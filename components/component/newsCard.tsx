import { newsType } from "./newsPost";
import time from "@/lib/time";
import Link from "next/link";

export default function NewsCard({ data }: { data: newsType }){
    return (<Link href={`/news/${data.id}`} className="w-11/12 max-w-[1250px]  rounded-2xl p-6 md:p-8 border border-blue-500  cursor-pointer flex flex-col gap-6">
        <h2 className="text-lg md:text-2xl font-semibold">{data.newsTitle}</h2>
        <div className="flex md:flex-row flex-col md:justify-between justify-center md:items-end items-start gap-2 border-t border-blue-900/30 pt-4">
            <div className="flex flex-col">
                <span className="font-semibold">{data.newsAuthor}</span>
                <span className="text-sm text-white/50">{data.newsAuthorDesignation}</span>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm text-white/50">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                {time(data.newsPostedDate.toString())}
            </div>
        </div>
    </Link>
)}