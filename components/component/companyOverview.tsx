"use client"

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type CompanyOverviewType = {
    title: string;
    description: string;
    url: string;
};

const CompanyOverviewData: CompanyOverviewType[] = [{
        title: "Constellation Capable",
        description: "Our Constellation provides redundant global coverage ensuring defense from any known or unknown launch location.",
        url: "/item1.gif",
    },{
        title: "A Step Beyond Deterrence",
        description: "Nuclear deterrence only works if dealings involve rational actors. Wardstone provides defensive capabilities to ensure security beyond deterrence.",
        url: "/item2.png",
    },{
        title: "Physical Space Defense",
        description: "Our satellites intercept and kinetically neutralize a variety of orbital-speed space threats.",
        url: "/item3.jpg",
}];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
        },
    },
};

export function CompanyOverview() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (<section className="relative w-11/12 md:w-10/12 mx-auto text-center text-white py-16 lg:py-20">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {CompanyOverviewData.map((item, index) => (
                <motion.div 
                    key={index} variants={cardVariants} 
                    whileHover={{ y: -8, transition: { type: "spring", damping: 20, stiffness: 300 }}} 
                    className="flex flex-col items-center bg-gradient-to-br from-[#050b16] to-[#0a1222] hover:from-[#0a1222] hover:to-[#0f1a30] border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500 rounded-2xl shadow-2xl p-6 lg:p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                        className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", damping: 15, stiffness: 300 }}>
                        <Image
                            src={item.url}
                            alt={item.title}
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <div className="relative z-10 text-center flex-1 flex flex-col">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 lg:mb-4 uppercase tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-300/90 leading-relaxed flex-1">
                            {item.description}
                        </p>
                    </div>
                    <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        whileHover={{ width: "60%", x: "-30%" }}
                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
                    />
                </motion.div>
            ))}
        </motion.div>
    </section>
)}