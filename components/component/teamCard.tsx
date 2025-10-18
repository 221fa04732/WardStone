import Image from "next/image"
import { teamInfoType } from "./teamOverview"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function TeamCard({data} : {data : teamInfoType}){
    return(<div className="w-[300px] relative flex flex-col flex-wrap justify-center items-center gap-2 bg-[#090909] rounded-lg px-6">
        <div className="absolute -top-[75px] h-[150px] w-[150px]">
            <Image src={data.url} alt="team" fill className="object-cover rounded-full"/>
        </div>
        <div className="rubik text-xl mt-[100px] text-center">{data.name}</div>
        <div className="text-white/50 text-center">{data.designation}</div>
        <Drawer>
            <DrawerTrigger className="border border-blue-500 px-6 py-1.5 rounded-full my-6 cursor-pointer">learn more</DrawerTrigger>
            <DrawerContent className="flex flex-col justify-center items-center border-t-blue-500 mb-10">
                <div className="w-11/12 flex flex-col justify-center items-center gap-2">
                    <DrawerHeader className="flex flex-col justify-center items-center">
                        <Image src={data.url} alt="team" width={150} height={150} className="rounded-full" />
                        <DrawerTitle className="rubik">{data.name}</DrawerTitle>
                        <DrawerDescription>{data.designation}</DrawerDescription>
                        <div className='flex justify-start items-center gap-4'>
                            <a href={data.linkedinURL} target='_blank'><Image src={'/linkedin.svg'} alt="discord" height={15} width={15} /></a>
                            <a href={data.xURL} target='_blank' ><Image src={'/twitter.svg'} alt="discord" height={15} width={15} /></a>
                        </div>
                    </DrawerHeader>
                    <div className="max-w-[900px] text-sm">{data.about}</div>
                </div>
            </DrawerContent>
        </Drawer>
    </div>)
}