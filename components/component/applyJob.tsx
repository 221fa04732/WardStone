import Link from "next/link";

export default function ApplyJob({ id }: { id: string | undefined }) {
    return (<div className="w-full flex flex-col justify-center items-start gap-6 bg-gray-900/40 md:p-6 p-2 rounded-xl border border-white/10 shadow-md">
        <h2 className="text-2xl font-semibold text-white mb-2">Apply for this Job</h2>
        <textarea style={{scrollbarWidth: "none",msOverflowStyle: "none"}} className="w-full h-64 bg-gray-800/60 text-gray-200 border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-400"placeholder="Write something about yourself..." />
        <label className="w-full text-gray-300">
            <span className="block mb-2 font-medium">Upload your resume<span className="text-red-600">*</span> (.pdf)</span>
            <input type="file" accept=".pdf" className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"/>
        </label>
        <div className="flex justify-center items-center gap-2">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 cursor-pointer">Submit Application</button>
            <Link href={'/career#open-role'} className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg cursor-pointer">Cancel</Link>
        </div>
    </div>
)}
