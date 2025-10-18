import prisma from "@/lib/prisma"
import JobCard from "./jobCard"

export type jobType = {
    id : string,
    jobTitle: string,
    jobDescription: string,
    jobTags: string[],
    jobPostedDate: any
}

export default async function JobPost(){
    const jobs : jobType[] = await prisma.jobs.findMany() 
    return(<div id="open-role" className="w-11/12 flex flex-col justify-center items-start gap-16 my-16">
        <div className="rubik text-xl md:text-3xl font-semibold border-b">Open positions</div>
        <div className="w-full flex flex-col justify-center items-start gap-10">
            {jobs.map((item : any, index : number)=>(
                <JobCard key={index} data={item} />
            ))}
        </div>
    </div>)
}