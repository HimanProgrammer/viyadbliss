"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HornbillDissolve() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <section style={{ position: "relative" }}>
      
      {/* SECTION 1 */}
      <div
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          background: "#f5f2eb"
        }}
      >
        <motion.div
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          style={{
            position: "absolute",
            top: "100px",
            right: "10%",
          }}
        >
          <Image
            src="/images/hornbill.png"
            alt="Hornbill"
            width={250}
            height={250}
          />
        </motion.div>

        <h1 style={{ paddingTop: "200px", textAlign: "center" }}>
          About Section
        </h1>
      </div>

      {/* SECTION 2 */}
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: "#1a1a1a",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1>Next Section</h1>
      </div>
    </section>
  );
}