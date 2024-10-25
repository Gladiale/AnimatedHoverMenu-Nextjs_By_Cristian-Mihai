"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { servicesConfig } from "@/config/servicesConfig";
import { imageVariants, textBlur } from "@/utils/motionVariants";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-8">
      {servicesConfig.map((service, index) => (
        <Link
          href={service.href}
          key={index}
          className={`border-b border-white/20 pb-8 ${
            index === 0 ? "border-t pt-8" : ""
          }`}
          onMouseOver={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="relative">
            <motion.div
              variants={textBlur}
              initial="initial"
              animate={activeIndex === index || activeIndex === null ? "show" : "hide"}
              className="flex items-center gap-4 w-full"
            >
              <div className="text-sm">{service.icon}</div>
              <div className="text-2xl uppercase">{service.title}</div>
            </motion.div>
            {/* img */}
            <motion.div
              variants={imageVariants}
              initial="initial"
              animate={activeIndex === index ? "show" : "hide"}
              className="absolute -top-48 right-0 xl:right-32"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={245}
                height={247}
                quality={100}
              />
            </motion.div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Services;
