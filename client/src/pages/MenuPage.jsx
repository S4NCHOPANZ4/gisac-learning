import React, { useEffect, useState, useRef } from "react";
import FlipCard from "../components/FlipCard";
import background from "../assets/kali-layers.svg";
import MuteButton from "../components/MuteButton";
import { MdOutlineBatteryFull } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";
import criptogr from "../assets/criptografia.jpg";
import forensics from "../assets/forensics.jpg";
import osint from "../assets/osint.jpg";
import pwn from "../assets/pwn.jpg";
import reversing from "../assets/reversing.jpg";
import scripting from "../assets/scripting.jpg";
import webe from "../assets/webe.jpg";
import ParallaxImg from "../components/ParallaxImg";
import Schedule from "../components/Schedule";
import CenterImage from "../components/CenterImage";
import SmallCard from "../components/SmallCard";
import { FaAngleUp } from "react-icons/fa";
import data from "../data.json";
import ViewLink from "../components/ViewLink";

const MenuPage = () => {
  const layout = data[0];
  const subjects = data[1];
  const [selectedSubject, setSelectedSubject] = useState(null);
  const targetDivRef = useRef(null);
  const targetDivRef2 = useRef(null);
  const [time, setTime] = useState(new Date());
  const [option, setOption] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedSubject(subjects.find((i) => i.id === option));
  }, [option]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTarget = (ref) => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  return (
    <>
      <div className="relative h-[150vh] lg:h-screen flex items-center justify-center ">
        <div className="flex items-center justify-center space-x-3 z-[100] absolute top-0 right-0 w-[300px] bg-slate-700 text-white text-center py-2 shadow-md rounded-l-full opacity-80">
          <p className="text-center font-semibold text-sm opacity-100">
            {" "}
            {time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <MuteButton />
          <MdOutlineBatteryFull />
          <RiShutDownLine />
        </div>
        <img
          src={background}
          className="absolute w-full h-full object-cover"
          alt="bg"
        />
        <div className="flex lg:hidden w-full flex flex-col space-y-2 px-5 md:px-10">
          {[
            [scripting, "Automatizacion & Scripting"],
            [osint, "Open Source Intelligence"],
            [forensics, "Forenciscs"],
            [webe, "Web Explotation"],
            [pwn, "Explotacion de Binarios"],
            [reversing, "Reversing"],
            [criptogr, "Criptografia"],
          ].map((val, index) => (
            <SmallCard
              key={index + val[1]}
              onClick={() => {
                scrollToTarget(targetDivRef2);
                setOption(index + 1);
              }}
              title={val[1]}
              cardImg={val[0]}
            />
          ))}
        </div>
        <div className="lg:flex hidden flex-wrap justify-center gap-4 b p-4 ">
          {[scripting, osint, forensics, webe, pwn, reversing, criptogr].map(
            (img, index) => (
              <FlipCard
                key={index}
                onClick={() => {
                  scrollToTarget(targetDivRef);
                  setOption(index + 1);
                }}
                image={img}
              />
            )
          )}
        </div>
      </div>
      {option ? (
        <>
          <div ref={targetDivRef} className="relative lg:block hidden">
            <CenterImage />
            {selectedSubject &&
              selectedSubject.resources.videos.map((video, index) => {
                return (
                  <ParallaxImg
                    key={`video-${index}`}
                    code={video}
                    start={layout[index].start}
                    end={layout[index].end}
                    className={layout[index].className}
                  />
                );
              })}
            {selectedSubject && <Schedule data={selectedSubject} />}
          </div>
          <div ref={targetDivRef2} className="lg:hidden col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-4 px-2 py-4">
              {selectedSubject &&
                selectedSubject.resources.videos.map((video, i) => (
                  <div
                    key={video + i}
                    className="flex-grow max-w-[300px] min-w-[240px]"
                  >
                    <ViewLink url={video} />
                  </div>
                ))}
            </div>
            {selectedSubject && <Schedule data={selectedSubject} />}
          </div>
        </>
      ) : (
        <div className="w-full space-y-3 flex flex-col items-center justify-center h-[200px] py-4">
          <p className="font-bold text-3xl">Elige una opción</p>
          <FaAngleUp className="text-5xl" />
        </div>
      )}
      {selectedSubject && (
        <div className="w-full h-[10px] flex items-center justify-center mb-10 text-zinc-600">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center space-x-4 font-bold border-2 rounded-full px-10 cursor-pointer"
          >
            <FaChevronUp />
            <p>Volver al inicio</p>

            <FaChevronUp />
          </button>
        </div>
      )}
    </>
  );
};

export default MenuPage;
