import Footer from "@/components/component/footer"
import MissionLanding from "@/components/component/missionLanding"
import MissionOverview from "@/components/component/missionOverview"
import Navbar from "@/components/component/navbar"

export default function Mission(){
    return(<div className="flex flex-col items-center justify-start min-h-screen min-w-full">
        <Navbar />
        <MissionLanding />
        <MissionOverview />
        <Footer />
    </div>)
}