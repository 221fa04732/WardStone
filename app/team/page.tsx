import Navbar from "@/components/component/navbar"
import Footer from "@/components/component/footer"
import TeamOverview from "@/components/component/teamOverview"
import ContactUs from "@/components/component/contactUs"
import TeamLanding from "@/components/component/teamLanding"

export default function Team(){
return(<div className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen min-w-full">
        <Navbar />
        <TeamLanding />
        <TeamOverview />
        <ContactUs />
        <Footer />
        <div className={`absolute bg-blue-400 blur-3xl opacity-30 md:h-[400px] md:w-[400px] h-[200px] w-[200px] rounded-full -z-10 md:-left-[200px] md:-bottom-[100px] -left-[100px] -bottom-[50px]`}></div>
    </div>)
}