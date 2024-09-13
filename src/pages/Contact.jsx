import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="mt-32 flex flex-col items-center justify-center text-white text-center all">
        <h2 className="text-3xl">Nous sommes</h2>
        <h1 className="pt-4 text-5xl font-bold">BRISE SERVICES</h1>
        <h3 className="pt-5 pb-20 text-2xl">
          Nous faisons dans l'illustration
        </h3>
      </div>
      <div className="grid justify-center">
        <div className="flex items-center">
          <img className="px-2 cursor-pointer" src={assets.whatsap} alt="" />
          <p className="text-white text-xl">(+237) 653 859 570 / 695 372 674</p>
        </div>
        <div className="flex mx-5 items-center reseaux py-16">
          <img className="px-2 cursor-pointer" src={assets.facebook} alt="" />
          <img className="px-2 cursor-pointer" src={assets.instagram} alt="" />
          <img className="px-2 cursor-pointer" src={assets.linkedin} alt="" />
          <p className="text-white text-xl">Brise Services</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
