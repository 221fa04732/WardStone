export default function HiringCard(){
    return(
        <div className="w-11/12 max-w-[1250px] flex flex-col justify-center items-center gap-2 md:gap-6 py-6 md:py-16 bg-[linear-gradient(135deg,#3883BC_0%,#001B2F_100%)] rounded-2xl mt-16 mb-16 hover:scale-99">
            <div className="text-black text-sm md:text-lg font-medium">Interested in Working on the Future of <div>Space Defense and National Security!</div></div>
            <div className="rubik text-xl md:text-3xl font-semibold">We’re Hiring!</div>
            <a href="/career#open-role" className="bg-black px-6 py-2 rounded-full mt-6 text-sm md:text-base">See open roles</a>
        </div>
    )
}