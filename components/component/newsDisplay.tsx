import { newsType } from "./newsPost";
import time from "@/lib/time";

export default function NewsDisplay({ news }: { news: newsType | null }) {
    return (<article className="bg-transparent text-gray-200 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{news?.newsTitle}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
            <span className="font-medium text-gray-300">{news?.newsAuthor}</span>
            {news?.newsAuthorDesignation && (
                <span className="text-gray-500 flex justify-center items-center gap-1">
                    <div className="max-h-1 max-w-1 min-h-1 min-w-1 bg-blue-500 rounded-full" ></div>
                    {news?.newsAuthorDesignation}
                </span>
            )}
            <span className="text-gray-500 flex justify-center items-center gap-1">
                <div className="max-h-1 max-w-1 min-h-1 min-w-1 bg-blue-500 rounded-full" ></div>
                {time(news?.newsPostedDate.toString())}
            </span>
        </div>
        <hr className="border-white/10 mb-8" />
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg whitespace-pre-line">{news?.newsDescription}</p>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-gray-500 text-sm text-center">
            <p>Written by {news?.newsAuthor}</p>
        </div>
    </article>
)}