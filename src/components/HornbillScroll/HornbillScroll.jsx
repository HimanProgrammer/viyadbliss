"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HornbillScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation (important for client quality)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  // Vertical travel
  const y = useTransform(smoothProgress, [0, 1], [0, 2200]);

  // Elegant curve
  const x = useTransform(
    smoothProgress,
    [0, 0.3, 0.6, 1],
    [0, 70, -50, 30]
  );

  // Subtle tilt
  const rotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0, 6, -3]
  );

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full h-[350vh] pointer-events-none"
    >
      <motion.div
        style={{ y, x, rotate }}
        className="fixed right-24 top-32 z-40"
      >
        {/* Shadow */}
        <div className="absolute top-[90px] left-[40px] w-[80px] h-[20px] bg-black/20 blur-xl rounded-full"></div>

        {/* Bird */}
        <Image
          src="/hornbill.png"
          alt="Hornbill"
          width={140}
          height={140}
          priority
          className="drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}