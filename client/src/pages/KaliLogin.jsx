import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import pfp from '../assets/gissacPfp.png'
import { MdNavigateNext } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { MdOutlineRestartAlt } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";


const KaliLogin = ({setFinished}) => {
  const [time, setTime] = useState(new Date());
  const [displayedText, setDisplayedText] = useState("");

  const dayOfWeek = time.toLocaleDateString("en-US", { weekday: "long" });
  const dayOfMonth = time.getDate(); 
  const month = time.toLocaleDateString("en-US", { month: "long" }); 
  const year = time.getFullYear();

  const controls1 = useAnimationControls(); 
  const controls2 = useAnimationControls(); 
  const controls3 = useAnimationControls(); 


  const writeText = async (text) => {
    setDisplayedText("");
    for (let i = 0; i <= text.length; i++) {
      setDisplayedText(text.slice(0, i));
      await controls2.start({ opacity: 1 }); 
      await new Promise(resolve => setTimeout(resolve, 50)); 
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000); 

    return () => clearInterval(interval);
  }, []);
  useEffect(()=>{
    const animar = async () => {
        await controls1.start({ opacity: 1, y: 0, scale: 1, transition: { duration: 2, ease: "easeOut" }});
        await writeText("We are seeing you");
        await controls3.start({ 
            opacity: 1, 
            y: 0, 
            scale: [1, 1.5, 1], 
            transition: { duration: 0.5, ease: "easeInOut" }
          });
        
          setFinished(true)
      };
      animar();
  },[])
  return (
    <div 

    className="backgroundLogin text-white w-screen h-screen flex items-center justify-center font-sans ">
      <motion.div
          initial={{ opacity: 0, y: 120 }} 
          animate={controls1}
      className="flex items-center flex-col space-y-4 mb-[2rem]">
        <div className="">
          <p className="text-center font-semibold text-[3rem] md:text-[4.5rem]">
            {" "}
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <p className="text-center font-normal text-md md:text-lg">{dayOfWeek}, {month} {dayOfMonth}, {year}</p>
        </div>
        <div className="rounded-lg font-semibold">
            <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center mb-7">
                <div className="w-[90%] h-[90%] bg-black rounded-full overflow-hidden">
                    <img src={pfp} className="w-full h-full object-cover" alt="pfp"/>
                </div>
            </div>
            <div>
                <p className="text-center">
                    Gisac_0
                </p>
            </div>
        </div>
        <div className="flex w-[200px] md:w-[400px]">
            <div className="w-full bg-slate-600 rounded-sm py-[.1rem] px-[.5rem] border border-blue-500 ">
                <motion.p animate={controls2} className="opacity-70 font-semibold">
                {displayedText}
                </motion.p>
            </div>
            <motion.div animate={controls3}className="bg-slate-600 rounded-sm py-[.1rem] px-[.5rem] border border-blue-500 flex items-center justify-center cursor-pointer"><MdNavigateNext /></motion.div>
        </div>
        <div className="flex justify-between mt-5 space-x-4 w-auto md:w-full max-w-sm mx-auto font-semibold ">
            <div className="flex flex-col items-center space-y-1 cursor-pointer opacity-50 hover:opacity-100">
                <GiNightSleep className="text-xl md:text-3xl"/>
                <p className="text-center text-xs md:text-sm">Sleep</p>
            </div>
            <div className="flex flex-col items-center  space-y-1 cursor-pointer opacity-50 hover:opacity-100">
                <MdOutlineRestartAlt  className="text-xl md:text-3xl"/>
                <p className="text-center text-xs md:text-sm">Restart</p>
            </div>
            <div className="flex flex-col items-center  space-y-1 cursor-pointer opacity-50 hover:opacity-100">
                <RiShutDownLine  className="text-xl md:text-3xl"/>
                <p className="text-center text-xs md:text-sm">Shut Down</p>
            </div>
            <div className="flex flex-col items-center  space-y-1 cursor-pointer opacity-50 hover:opacity-100">
                <FaServer  className="text-xl md:text-3xl"/>
                <p className="text-center text-xs md:text-sm">Other...</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KaliLogin;
