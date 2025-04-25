import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const ViewLink = ({url = "cYuq9ulr8U0", title ="Title"}) => {
  const [loading, setLoading] = useState(true);
  const [vidData, setVidData] = useState({});
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${url}`, "_blank");
  };
  useEffect(() => {
    setLoading(true);
    
    fetch(`http://localhost:3030/tnv1/tn/${url})}`)
      .then((res) => res.json())
      .then((data) => {
        setVidData({...data.data})
        console.log(data);
        
        setLoading(false);
        
      })
      .catch(() => setLoading(false));
  }, [url]);


  return (
    <div  onClick={() => handleClick(url)} className="w-[300px]  rounded-lg overflow-hidden cursor-pointer">
      <div className="h-[170px]  bg-zinc-300 ">
        {loading && (
          <div className=" w-full h-full flex items-center justify-center text-gray-500 ">
            <div className="loader"></div>
          </div>
        )}
        {vidData && !loading && (
          <div className="w-full h-full relative">
            <div className="flex items-center justify-center z-[1000] absolute top-0 left-0 w-full h-full bg-black hover:opacity-[40%] opacity-[0%] transition-all duration-300 ease-in-out ">
              <FaPlay className="text-white text-5xl"/>
            </div>
          <motion.img
            src={vidData.thumbnail}
            alt="Preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <div className="bg-white p-4">
        <p className="text-sm  text-zinc-900 font-semibold">{!loading && vidData.title}</p> 
        <p className="text-xs text-zinc-400">{!loading &&  vidData.channelName}</p> 
      </div>
    </div>
  );
};

export default ViewLink;
