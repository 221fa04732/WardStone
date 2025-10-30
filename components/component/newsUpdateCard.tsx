import Link from "next/link";
import { newsType } from "./newsPost";
import { SquarePen } from "lucide-react";

export default function NewsUpdateCard({ data }: { data: newsType }){
    return (<div className="w-11/12 max-w-[1250px] rounded-2xl p-6 md:p-8 border border-blue-500 flex flex-col gap-6">
        <h2 className="text-lg md:text-2xl font-semibold">{data.newsTitle}</h2>
        <div className="flex flex-row  justify-between items-end gap-2 border-t border-blue-900/30 pt-4">
            <div className="flex flex-col">
                <span className="font-semibold">{data.newsAuthor}</span>
                <span className="text-sm text-white/50">{data.newsAuthorDesignation}</span>
            </div>
            <Link href={`/admin/update-news/${data.id}`} className={`cursor-pointer p-2 rounded-sm hover:bg-green-500/30`}>
                <SquarePen className="text-green-500 min-h-4 min-w-4"/>
            </Link> 
        </div>
    </div>
)}