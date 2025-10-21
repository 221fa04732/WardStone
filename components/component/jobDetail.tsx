import ApplyJob from "./applyJob";
import { jobType } from "./jobPost";

export default function JobDetail({ job }: { job: jobType | null }){
    return(<div className="w-11/12 flex flex-col justify-start items-start mt-32 mb-16 text-gray-100">
        <h1 className="text-4xl font-bold tracking-tight text-white flex gap-1 pb-4"><div className="min-h-3 max-h-3 min-w-3 max-w-3 bg-green-600 rounded-full mt-3.5"></div>{job?.jobTitle}</h1>
        {job?.jobTags && job.jobTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
                {job.jobTags.map((item: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm font-medium">{item}</span>
                ))}
            </div>
        )}
        <div className="w-full mb-12">
            <h2 className="text-xl font-semibold text-white mb-2">About the Role</h2>
            {job?.jobDescription && job.jobDescription.length > 0 ? (job.jobDescription.map((item: string, index: number)=> (
                <div key={index} className="text-white/50 flex gap-2 pb-1"><div className="min-h-1 max-h-1 min-w-1 max-w-1 bg-white/50 rounded-full mt-3"></div>{item}</div>))) : (<p className="text-white/50">No description available.</p>
            )}
        </div>
        <ApplyJob id={job?.id} jobTitle={job?.jobTitle} />
    </div>
)}
