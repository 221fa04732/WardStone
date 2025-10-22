import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"
import SendMessage from "./sendMessage"

export default function ContactUs(){
    return(
        <div className="w-11/12 max-w-[1250px] flex flex-col justify-center items-center gap-2 md:gap-6 md:py-16 py-6 bg-[linear-gradient(135deg,#3883BC_0%,#001B2F_100%)] rounded-2xl mb-16 mt-32">
            <div className="rubik text-xl md:text-3xl font-semibold text-center">Interested in Investing, Working, <div>or Collaborating with Us?</div></div>
            <Drawer>
                <DrawerTrigger className="bg-black px-6 py-2 rounded-full mt-6 text-sm md:text-base cursor-pointer">Send a message</DrawerTrigger>
                    <DrawerContent className="w-full flex justify-center items-center ">
                        <DrawerHeader>
                        <DrawerTitle>Let’s grow together!</DrawerTitle>
                        <DrawerDescription></DrawerDescription>
                    </DrawerHeader>
                    <div className="w-11/12 flex justify-center items-center">
                        <SendMessage />
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}