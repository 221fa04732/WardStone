import Image from "next/image"

export default function TeamLanding(){
    return(<div className="relative flex justify-center items-center w-full h-[300px] md:h-[500px]">
        <Image src={'/team.jpg'} alt="home" fill className="object-cover opacity-25"/>
        <div className="absolute h-full w-11/12 flex flex-col items-center justify-center gap-6">
            <div className="rubik text-2xl md:text-6xl font-semibold md:font-bold pt-36 text-center">Meet Our Team</div>
            <div className="text-center text-sm md:text-lg text-white/75 md:font-semibold pb-32">We bring excellence, credibility, and learnings from drones, satellites, the Air Force, MIT, Cornell, Harvard, Y-Combinator, and beyond. We are laser focused on delivering the next generation of space superiority capabilities for the US and its allies.</div>
        </div>
    </div>)
}