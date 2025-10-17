import { CompanyOverview } from "@/components/component/companyOverview";
import Footer from "@/components/component/footer";
import HiringCard from "@/components/component/hiringCard";
import HomeLanding from "@/components/component/homeLanding";
import Navbar from "@/components/component/navbar";

export default function Home(){
    return(<div className="flex flex-col items-center justify-start min-h-screen min-w-full">
        <Navbar />
        <HomeLanding />
        <CompanyOverview />
        <HiringCard />
        <Footer />
    </div>)
}