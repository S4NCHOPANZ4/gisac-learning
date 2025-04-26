import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import backImg from "../assets/backcard.webp";

const FlipCard = ({ image, onClick }) => {
  const [flipped, setFlipped] = useState(false);
  const [removed, setRemoved] = useState(false);

  
  const handleClick = useCallback((event) => {
    if (onClick) {
      onClick(event);
    }
    setRemoved(true); 
    setTimeout(() => {
      setRemoved(false);
    }, 1000);
  }, [onClick]);



  return (
    <div className="flex flex-col items-center relative">
      <motion.div
        className="w-48 h-70 cursor-pointer relative"
        style={{ perspective: 1000 }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={handleClick}
        initial={{ opacity: 0, y: 100 }}
        animate={removed ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="relative w-full h-full shadow-lg"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img src={backImg} alt="back" className="w-full h-full rounded-lg" />
          </div>

          <div
            className="absolute w-full h-full bg-red-500 text-white flex items-center justify-center rounded-lg shadow-lg"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            onClick={() => console.log("Reverso clickeado")}
          >
            <img src={image} alt="back" className="w-full h-full rounded-lg" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
