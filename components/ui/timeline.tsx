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
          <div key={index} className="flex justify-start pb-10">
            <div className="relative flex flex-col justify-start items-center z-20">
              <div className="h-6 absolute w-6 left-3 rounded-full bg-white flex items-center justify-center mt-6">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
              </div>
              <div className="relative left-16 flex flex-col md:flex-row items-start gap-6 mr-16">
                <div className="w-full max-w-80 h-64 flex-shrink-0">
                  {item.type === 0 ? 
                    <Image src={item.url}  alt="item"  width={320} height={256} className="w-full h-full object-cover rounded-2xl"/> : <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-2xl"><source src={item.url} type="video/mp4" /></video>
                  }
                </div>
                <div className="flex flex-col justify-center items-start gap-2 md:gap-6 h-full">
                  <div className="rubik text-xl font-semibold transition-all duration-300">{item.title}</div>
                  <div className="text-white/50 transition-all duration-300">{item.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[4px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
