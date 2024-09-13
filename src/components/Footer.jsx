import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between mt-40 mb-20 footer ">
      <div className="flex mx-5 items-center reseaux pb-3">
        <img
          className="px-2 cursor-pointer w-[50px]"
          src={assets.facebook}
          alt=""
        />
        <img
          className="px-2 cursor-pointer w-[50px]"
          src={assets.instagram}
          alt=""
        />
        <img
          className="px-2 cursor-pointer w-[50px]"
          src={assets.linkedin}
          alt=""
        />
        <p className="text-white text-xxl">Brise Services</p>
      </div>
      <div className="flex items-center ">
        <img
          className="px-2 cursor-pointer w-[50px]"
          src={assets.whatsap}
          alt=""
        />
        <p className="text-white text-xxl">(+237) 653 859 570 / 695 372 674</p>
      </div>
    </div>
  );
};

export default Footer;
