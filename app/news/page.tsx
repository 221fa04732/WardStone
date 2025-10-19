import Footer from "@/components/component/footer"
import Navbar from "@/components/component/navbar"
import NewsLanding from "@/components/component/newsLanding"

export default function News(){
return(<div className="flex flex-col items-center justify-center min-h-screen min-w-full">
        <Navbar />
        <NewsLanding />
        <Footer />
    </div>)
}