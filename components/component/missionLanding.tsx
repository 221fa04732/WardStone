import Image from "next/image"

export default function MissionLanding(){
    return(<div className="relative flex justify-center items-center w-full h-[500px]">
        <Image src={'/flag.png'} alt="home" fill className="object-cover opacity-25"/>
        <div className="absolute h-full w-full flex flex-col items-center justify-center">
            <div className="w-10/12 flex flex-col items-center justify-center">
                <div className="mb-16 rubik text-2xl md:text-6xl font-semibold md:font-bold">Our Mission</div>
                <div className="md:font-semibold md:text-2xl">“The threat of attack by ballistic, hypersonic, and cruise missile, and other advanced aerial attacks, remains the most catastrophic threat facing the United States.”<div className="w-full text-end text-[#D0A035] pt-1 md:pt-2">- Executive Order 14186</div></div>
            </div>
        </div>
    </div>)
}