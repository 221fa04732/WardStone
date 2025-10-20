import Image from "next/image"
import { teamInfoType } from "./teamOverview"

export default function TeamCard({data} : {data : teamInfoType}){
    return(<div className="w-[300px] relative flex flex-col flex-wrap justify-center items-center gap-2 bg-[#090909] rounded-lg px-6">
        <div className="absolute -top-[75px] h-[150px] w-[150px]">
            <Image src={data.url} alt="team" fill className="object-cover rounded-full"/>
        </div>
        <div className="rubik text-xl mt-[100px] text-center">{data.name}</div>
        <div className="text-white/50 text-center">{data.designation}</div>
        <a href={data.linkedinURL} target='_blank' className="my-6">
            <button className="border border-blue-500 px-6 py-1.5 rounded-full cursor-pointer">learn more</button>
        </a>
    </div>)
}