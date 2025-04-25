import React from "react";

const OpenLink = ({ link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return <p onClick={handleClick} className="pl-6 text-blue-400 underline cursor-pointer break-words">{link}</p>;
};

export default OpenLink;
