import Image from "next/image";

export default function MissionOverview(){
    return(<div className="w-11/12 flex flex-col justify-center items-center gap-16 my-16">
        <div className="w-full flex flex-col justify-center items-start text-sm md:text-base gap-2 md:gap-4">
            <div className="flex justify-center items-start gap-1 md:gap-2"><div className="max-h-2 max-w-2 min-h-2 min-w-2 bg-white rounded-full mt-1.5 md:mt-2"></div>At Wardstone, we safeguard the United States from emerging threats with the most advanced defensive space capabilities ever developed.</div>
            <div className="flex justify-center items-start gap-1 md:gap-2"><div className="max-h-2 max-w-2 min-h-2 min-w-2 bg-white rounded-full mt-1.5 md:mt-2"></div>We exist to protect what matters most: the safety of our nation, the resilience of our forces, and the security of generations to come. Every breakthrough strengthens our commitment to keep America secure, vigilant, and always a step ahead.</div>
        </div>
        <Image src={'/mission.jpg'} alt="mission" height={1080} width={1920} className="object-contain rounded-md h-auto w-full"/>
    </div>)
}