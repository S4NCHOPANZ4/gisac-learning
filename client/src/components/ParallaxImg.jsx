import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";
import ViewLink from "./ViewLink";
const ParallaxImg = ({code = "M02MMeoBE_w", className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: [`${start}px end`, `end ${end * -1}px`] });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  return (
    <motion.div src={src} alt={alt} className={className} ref={ref} style={{ transform: useMotionTemplate`translateY(${y}px) scale(${scale})`, opacity }}>
      <ViewLink url={code}/>
    </motion.div>
  );
};

export default ParallaxImg;
