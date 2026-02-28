"use client";

import { useScroll } from "framer-motion";
import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext(null);

export function ScrollController({ children }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <ScrollContext.Provider value={scrollYProgress}>
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </ScrollContext.Provider>
  );
}

export function useGlobalScroll() {
  return useContext(ScrollContext);
}