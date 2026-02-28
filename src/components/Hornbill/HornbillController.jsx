"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function HornbillController() {
  const { scrollY } = useScroll();

  const [isFlying, setIsFlying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  /* ---------------------------------------
     Scroll Direction Detection
  --------------------------------------- */

  useEffect(() => {
    let previous = 0;

    const unsubscribe = scrollY.on("change", (value) => {
      if (value > previous) {
        setDirection(1); // scrolling down → face right
      } else {
        setDirection(-1); // scrolling up → face left
      }

      previous = value;

      /* ---------------------------------------
         Sit / Fly Zones
      --------------------------------------- */

      if (value < 400) {
        setIsFlying(false); // Hero sit
      } else if (value >= 400 && value < 1000) {
        setIsFlying(true); // Fly
      } else if (value >= 1000 && value < 1400) {
        setIsFlying(false); // Sit again
      } else {
        setIsFlying(true);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  /* ---------------------------------------
     Horizontal Only Movement (Clean)
  --------------------------------------- */

  const rawX = useTransform(scrollY, [0, 2000], [-300, 1200]);
  const rawY = useTransform(scrollY, [0, 2000], [200, 600]); 
  const rawRotate = useTransform(scrollY, [0, 2000], [-10, 10]);

  const x = useSpring(rawX, { stiffness: 60, damping: 20 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });
  const rotate = useSpring(rawRotate, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scaleX: direction, // 🔥 FLIP LEFT ↔ RIGHT
        scale: 0.9,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      {/* Floating Motion */}
      <motion.div
        animate={
          isFlying
            ? { y: [0, -15, 0] }
            : { y: [0, -4, 0] }
        }
        transition={{
          duration: isFlying ? 1.2 : 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={
            isFlying
              ? "/img/hornbill-fly.png"
              : "/img/hornbill-sit.png"
          }
          alt="Hornbill"
          width={200}
          height={280}
          priority
        />
      </motion.div>
    </motion.div>
  );
}