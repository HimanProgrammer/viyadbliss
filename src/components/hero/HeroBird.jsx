"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroBird() {
  const [landed, setLanded] = useState(false);

  return (
    <motion.div
      initial={{
        x: 300,
        y: -250,
        rotate: -15,
        opacity: 0
      }}
      animate={{
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1
      }}
      transition={{
        duration: 2.2,
        ease: [0.65, 0, 0.35, 1],
      }}
      onAnimationComplete={() => setLanded(true)}
      style={{
        position: "absolute",
        right: "60px",
        bottom: "-10px",
        zIndex: 15,
        pointerEvents: "none",
        scaleX: -1   // 🔥 FLIP HORIZONTALLY
      }}
    >
      <motion.div
        animate={
          landed
            ? { y: [0, -3, 0] }
            : { y: [0, -20, 0] }
        }
        transition={{
          duration: landed ? 2.5 : 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={
            landed
              ? "/img/hornbill-sit.png"
              : "/img/hornbill-fly.png"
          }
          alt="Hornbill"
          width={260}
          height={320}
          priority
        />
      </motion.div>
    </motion.div>
  );
}