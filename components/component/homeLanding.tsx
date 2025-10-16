import Image from "next/image"

export default function HomeLanding(){
    return(<div className="relative flex justify-center items-center w-full md:h-[700px] h-screen">
        <Image src={'/home.png'} alt="home" fill className="object-cover"/>
        <div className="absolute h-full w-full flex flex-col items-center justify-center">
            <div className="w-10/12 flex flex-col items-center justify-center">
                <div className="flex justify-center items-start gap-2 border border-white/50 text-white/50 rounded-full px-6 py-1">
                    <div className="bg-white/50 rounded-full max-h-2 max-w-2 min-h-2 min-w-2 mt-1.5"></div>
                    <div className="text-center text-sm">Next-generation Space Defense Technology</div>
                </div>
                <div className="text-2xl md:text-6xl font-bold rubik text-center mt-6">Satellites for Missile<div>Defense</div></div>
            </div>
        </div>
        <div className="w-10/12 md:w-[700px] absolute bottom-64 md:bottom-32 text-center md:text-sm text-xs pt-16">Wardstone is a space defense-tech company developing next-generation capabilities to protect the United States and its allies from missiles and other space-based threats. We design, build, and deploy satellites equipped with space-based interceptors to kinetically counter hypersonic and ballistic missiles.</div>
    </div>)
}