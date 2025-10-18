import CareerLanding from "@/components/component/careerLanding"
import Footer from "@/components/component/footer"
import Navbar from "@/components/component/navbar"

export default function Career(){
    return(<div className="flex flex-col items-center justify-center min-h-screen min-w-full">
        <Navbar />
        <CareerLanding />
        <Footer />
    </div>)
}