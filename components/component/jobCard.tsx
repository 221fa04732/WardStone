import { jobType } from "./jobPost"
import time from "@/lib/time"

export default function JobCard({data} : {data : jobType}){
    return(<div className="w-full flex flex-col justify-center items-start gap-2 md:border-b md:border-white/25">
        <div className="flex justify-center items-center gap-2 md:gap-4">
            <div className="font-semibold rubik md:text-xl">{data.jobTitle}</div>
            <div className="text-xs text-white/50 pt-1">{time(data.jobPostedDate.toString())}</div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between item-start md:items-center gap-2 text-white/50 pb-2">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
                {data.jobTags.map((item : any, index : any)=>(
                    <div key={index} className="flex justify-center items-center gap-1"><div className="min-h-2 min-w-2 max-h-2 max-w-2 rounded-full bg-blue-500"></div>{item}</div>
                ))}
            </div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded-full max-w-32">apply now</button>
        </div>
    </div>)
}