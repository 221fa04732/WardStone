import Footer from "@/components/component/footer"
import MissionLanding from "@/components/component/missionLanding"
import Navbar from "@/components/component/navbar"

export default function Mission(){
    return(<div className="flex flex-col items-center justify-center min-h-screen min-w-full">
        <Navbar />
        <MissionLanding />
        <Footer />
    </div>)
}