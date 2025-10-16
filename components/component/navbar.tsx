import Image from "next/image"
import Link from "next/link"
import Dropdown from "./dropdown"

export type navigationURLType = {
    name : string,
    url : string
}

const navigationURL : navigationURLType[] = [{
        name : "home",
        url : "/"
    },{
        name : "career",
        url : "/career"
    },{
        name : "team",
        url : "/team"
    },{
        name : "mission",
        url : "/mission"
    },{
        name : "news",
        url : "/news"
    }
]

export default function Navbar(){
    return(<div className="flex justify-center w-full md:h-16 h-10 fixed top-0 z-50 backdrop-blur-lg bg-white/10">
        <div className="w-11/12 flex justify-between items-center">
            <Image src={'/icon.png'} alt="icon" width={100} height={100} className="md:max-h-10 md:max-w-10 max-h-6 max-w-6"/>
            <div className="hidden md:flex justify-center items-center gap-4">
                {navigationURL.map((item: navigationURLType) => (
                    <Link className="hover:text-blue-500 rubik" key={item.url} href={item.url}>{item.name}</Link>
                ))}
            </div>
            <div className="md:hidden"><Dropdown navigationURL={navigationURL} /></div>
        </div>
    </div>
)}