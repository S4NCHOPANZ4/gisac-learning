import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";

const SmallCard = ({ cardImg, title, onClick }) => {
  const [removed, setRemoved] = useState(false);
  const handleClick = useCallback(
    (event) => {
      if (onClick) {
        onClick(event);
      }
      setRemoved(true);
      setTimeout(() => {
        setRemoved(false);
      }, 1000);
    },
    [onClick]
  );

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 100 }}
      animate={removed ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="cursor-pointer relative w-full p-2 rounded-lg flex items-center space-x-4 text-zinc-700 backgoundSemiTransparent "
    >
      <img className="h-[120px] rounded-md" src={cardImg} alt="test-card"></img>
      <div className="w-full px-4">
        <p className="font-semibold uppercase text-xs lg:text-lg md:text-xl text-end">
          {title}
        </p>
        <p className="font-normal uppercase text-xs lg:text-lg md:text-md text-end  text-zinc-500">
          Saber mas
        </p>
      </div>
    </motion.div>
  );
};

export default SmallCard;
