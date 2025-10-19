"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { CompanyOverviewType } from "../component/companyOverview";
import Image from "next/image";

export const Timeline = ({ data }: { data: CompanyOverviewType[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full flex justify-start items-center" ref={containerRef}>
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pb-16">
            <div className="relative flex justify-start items-start z-20">
              <div className="flex-shrink-0 w-12 flex justify-center">
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center mt-6 z-30 relative">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                </div>
              </div>
              <div className="flex-1 pl-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="relative w-full">
                    <div className="aspect-video rounded-xl overflow-hidden bg-neutral-800/50">
                      {item.type === 1 ? (
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                          <source src={item.url} type="video/mp4" />
                        </video>):(
                        <Image  src={item.url}  alt={item.title} width={600} height={400} className="w-full h-full object-cover"/>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-4 h-full">
                    <h3 className="rubik text-2xl font-semibold text-white transition-all duration-300">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed text-lg transition-all duration-300">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};