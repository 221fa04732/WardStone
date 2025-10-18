import Image from "next/image"

export default function TeamLanding(){
    return(<div className="relative flex justify-center items-center w-full h-[300px] md:h-[500px]">
        <Image src={'/team.jpg'} alt="home" fill className="object-cover opacity-25"/>
        <div className="absolute h-full w-full flex flex-col items-center justify-center">
            <div className="mb-16 rubik text-2xl md:text-6xl font-semibold md:font-bold pb-32 pt-64">Meet Our Team</div>
        </div>
    </div>)
}