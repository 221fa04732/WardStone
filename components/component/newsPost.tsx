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
    return(<div className="w-full flex flex-col justify-center items-center gap-4 my-16">
        {news.map((item : newsType, index : number)=>(
            <NewsCard key={index} data={item}/>
        ))}
    </div>)
}