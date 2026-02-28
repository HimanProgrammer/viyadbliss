"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HornbillNavigator() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const [isFlying, setIsFlying] = useState(true);

  useEffect(() => {
    let previousScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Direction detect
      setDirection(currentScroll > previousScroll ? 1 : -1);
      previousScroll = currentScroll;

      const sections = document.querySelectorAll(".bird-section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          const sectionTop =
            window.scrollY + rect.top;

          setPosition({
            x: direction === 1 ? 40 : window.innerWidth - 260, // left or right edge
            y: sectionTop + 80,
          });

          setIsFlying(false);
        } else {
          setIsFlying(true);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [direction]);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        scaleX: direction,
      }}
      transition={{
        duration: 1.6,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
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
          width={220}
          height={280}
          priority
        />
      </motion.div>
    </motion.div>
  );
}