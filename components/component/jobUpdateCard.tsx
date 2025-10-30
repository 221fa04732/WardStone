import Link from "next/link";
import { jobType } from "./jobPost";
import { SquarePen } from "lucide-react";

export default function JobUpdateCard({ data }: { data: jobType }){
    return (<div className="w-11/12 max-w-[1250px] rounded-2xl p-6 md:p-8 border border-blue-500 flex flex-col gap-6">
        <h2 className="text-lg md:text-2xl font-semibold">{data.jobTitle}</h2>
        <div className="flex flex-row  justify-between items-end gap-2 border-t border-blue-900/30 pt-4">
            <div className="flex justify-start items-center gap-2">
                {data.jobTags.map((item : string, index : number)=>(
                    <div key={index} className="text-green-500 px-4 py-1 bg-green-500/10 rounded-full">{item}</div>
                ))}
            </div>
            <Link href={`/admin/update-job/${data.id}`} className={`cursor-pointer p-2 rounded-sm hover:bg-green-500/30`}>
                <SquarePen className="text-green-500 min-h-4 min-w-4"/>
            </Link> 
        </div>
    </div>
)}