import prisma from "@/lib/prisma"
import NewsCard from "./newsCard"

export type newsType = {
    newsTitle : string,
    newsDescription : string,
    newsAuthor : string,
    newsAuthorDesignation : string,
    newsPostedDate : any
}

export default async function NewsPost(){
    const news : newsType[] = await prisma.news.findMany()
    return(<div className="relative w-full min-h-96 flex flex-col justify-center items-center gap-4 my-16">
        {news.map((item : newsType, index : number)=>(
            <NewsCard key={index} data={item}/>
        ))}
        <div className={`absolute bg-sky-400 blur-3xl opacity-20 h-[300px] w-[300px] rounded-full -z-10`}></div>
    </div>)
}