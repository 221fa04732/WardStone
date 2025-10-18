import Navbar from "@/components/component/navbar"
import Footer from "@/components/component/footer"
import TeamOverview from "@/components/component/teamOverview"
import ContactUs from "@/components/component/contactUs"
import TeamLanding from "@/components/component/teamLanding"

export default function Team(){
return(<div className="flex flex-col items-center justify-center min-h-screen min-w-full">
        <Navbar />
        <TeamLanding />
        <TeamOverview />
        <ContactUs />
        <Footer />
    </div>)
}