import React from "react";

const Title = ({ text }) => {
  return (
    <div className="text-center my-5">
      <h1 className="text-3xl font-bold text-white">{text}</h1>
      <div className="w-1/4 h-1 bg-orange-700 mx-auto mt-2"></div>
    </div>
  );
};

export default Title;
