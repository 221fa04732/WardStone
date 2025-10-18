import Image from "next/image"

export default function CareerLanding(){
    return(<div className="relative flex justify-center items-center w-full h-[300px] md:h-[500px]">
        <Image src={'/career.jpg'} alt="home" fill className="object-cover opacity-25"/>
        <div className="absolute h-full w-11/12 flex flex-col items-center justify-center gap-4">
            <div className="rubik text-2xl md:text-6xl font-semibold md:font-bold pt-36 text-center">Work at Wardstone</div>
            <div className="text-center text-sm md:text-lg text-white/75 md:font-semibold pb-32">Be a part of an innovative team that are shaping the future of next-generation space defense technology.</div>
        </div>
    </div>)
}