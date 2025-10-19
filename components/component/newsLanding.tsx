import Image from "next/image"

export default function NewsLanding(){
    return(<div className="relative flex justify-center items-center w-full h-[300px] md:h-[500px]">
        <Image src={'/space.gif'} alt="home" fill className="object-cover opacity-25"/>
        <div className="absolute h-full w-11/12 flex flex-col items-center justify-center gap-6">
            <div className="rubik text-2xl md:text-6xl font-semibold md:font-bold pt-36 text-center">Ours News And Blogs</div>
            <div className="text-center text-sm md:text-lg text-white/75 md:font-semibold pb-32">Stay informed with the latest developments in space defense, national security, and next-generation technologies that protect our future.</div>
        </div>
    </div>)
}