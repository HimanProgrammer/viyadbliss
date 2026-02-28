"use client";

import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

function ZigZagSection({ image, title, description, reverse }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [landed, setLanded] = useState(false);

  return (
    <div className="ltn__about-us-area pt-120 pb-90" ref={ref}>
      <Container>
        <Row className="align-items-center">

          {/* Image Column */}
          <Col lg={6} className={reverse ? "order-lg-2" : "order-lg-1"}>
            <div className="about-us-img-wrap position-relative">

              {/* Bungalow Image */}
              <img
                src={image}
                alt={title}
                className="img-fluid rounded"
              />

              {/* 🐦 Bird */}
              {isInView && (
                <motion.div
                  initial={{
                    x: reverse ? -200 : 200,
                    y: -150,
                    rotate: reverse ? -20 : 20,
                    opacity: 0
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    rotate: 0,
                    opacity: 1
                  }}
                  transition={{
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1]
                  }}
                  onAnimationComplete={() => setLanded(true)}
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: reverse ? "auto" : "20px",
                    left: reverse ? "20px" : "auto",
                    zIndex: 10,
                    pointerEvents: "none",
                    transform: reverse ? "scaleX(1)" : "scaleX(-1)"
                  }}
                >
                  <motion.div
                    animate={
                      landed
                        ? { y: [0, -3, 0] }
                        : { y: [0, -15, 0] }
                    }
                    transition={{
                      duration: landed ? 2.5 : 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src={
                        landed
                          ? "/img/hornbill-sit.png"
                          : "/img/hornbill-fly.png"
                      }
                      alt="Hornbill"
                      width={180}
                      height={240}
                    />
                  </motion.div>
                </motion.div>
              )}

            </div>
          </Col>

          {/* Text Column */}
          <Col lg={6} className={reverse ? "order-lg-1" : "order-lg-2"}>
            <div className="about-us-info-wrap">
              <h2 className="section-title">{title}</h2>
              <p>{description}</p>

              <a href="#" className="btn theme-btn-1 btn-effect-1 mt-3">
                Explore More
              </a>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default ZigZagSection;