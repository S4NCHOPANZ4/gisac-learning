import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { RiArrowDownWideLine } from "react-icons/ri";
import { RiArrowUpWideFill } from "react-icons/ri";

import React, { useState } from "react";
import OpenLink from "./OpenLink";
const ScheduleItem = ({ data, title, rate }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {data && (
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9  border-b border-zinc-800 text-zinc-500 z-[1000]"
        >
          <div
            onClick={() => setOpen(!open)}
            className="z-10 pointer-events-auto relative   text-white rounded-full cursor-pointer flex items-center justify-between px-3 py-5 "
          >
            <div>
              <p className="mb-1.5 font-bold text-xl text-zinc-500">{title}</p>
              <p className="text-sm uppercase text-zinc-500">{rate}</p>
            </div>
            <div className="flex items-center  ">
              <button className="p-2 bg-black z-10 pointer-events-auto   text-white rounded-full">
                {open ? <RiArrowUpWideFill /> : <RiArrowDownWideLine />}
              </button>
            </div>
          </div>
          {open && (
            <div className="z-10 pointer-events-auto relative ">
              <div className="px-3 py-5 font-semibold">
                {Object.entries(data).map(([key, value], index) => (
                  <div key={index+value}>
                    <p className="uppercase my-2">{key}</p>
                    {value.map((link, i) => (
                      <OpenLink key={i+link} link={link} />
                    ))}
                  </div>
                ))}

                <br />
              </div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default ScheduleItem;
