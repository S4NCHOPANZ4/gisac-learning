import React, { useState } from "react";
import { ImVolumeMute } from "react-icons/im";
import { ImVolumeMute2 } from "react-icons/im";

const MuteButton = () => {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    const audioElements = document.querySelectorAll("audio, video");
    audioElements.forEach((el) => {
      el.muted = !muted;
    });
    setMuted(!muted);
  };

  return (
    <button
      onClick={toggleMute}
      className=" text-white cursor-pointer"
    >
      {muted ? <ImVolumeMute2/> : <ImVolumeMute/>}
    </button>
  );
};

export default MuteButton;
