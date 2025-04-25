import { motion } from "framer-motion";
import ScheduleItem from "./ScheduleItem";
import React, { useState } from "react";
const Schedule = ({data}) => {
  return (
    <section id="launch-schedule" className="mx-auto w-screen md:max-w-5xl px-4 pb-10 pt-20 text-white">
      <motion.h1 initial={{ y: 48, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} 
      transition={{ ease: "easeInOut", duration: 0.75 }} 
      className="mb-20 text-4xl font-black uppercase text-black">
        <p className="">
          ruta de aprendizaje
        </p>
        <p className="lowercase text-lg md:text-2xl ">{data.nombre}</p>
      </motion.h1>
      <ScheduleItem data={data.resources.novice} title="Principiante" rate="Click me"  />
      <ScheduleItem data={data.resources.intermediate} title="Intermedio" rate="Click me"  />
      <ScheduleItem data={data.resources.advanced} title="Avanzado" rate="Dificultad - panic"  />
    </section>
  );
};

export default Schedule;
