import { CompanyOverview } from "@/components/component/companyOverview";
import Footer from "@/components/component/footer";
import HiringCard from "@/components/component/hiringCard";
import HomeLanding from "@/components/component/homeLanding";
import Navbar from "@/components/component/navbar";

export default function Home(){
    return(<div className="relative overflow-hidden flex flex-col items-center justify-start min-h-screen min-w-full">
        <Navbar />
        <HomeLanding />
        <CompanyOverview />
        <HiringCard />
        <Footer />
        <div className={`absolute bg-blue-400 blur-3xl opacity-30 md:h-[400px] md:w-[400px] h-[200px] w-[200px] rounded-full -z-10 md:-left-[200px] md:-bottom-[100px] -left-[100px] -bottom-[50px]`}></div>
    </div>)
}