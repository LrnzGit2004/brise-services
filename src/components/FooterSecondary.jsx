import React from "react";
import { assets, images } from "../assets/assets";

//ce footer est pour les pages portfolio.
const FooterSecondary = () => {
  return (
    <div>
      <div className=" bg-zinc-500 mt-10 pt-5">
        <div className="bg-zinc-700 flex flex-col items-center md:flex-row mt-[25px] pt-5 pb-5 justify-around ">
          <div className=" order-2 flex flex-col mt-9">
            <div className=" mb-3 flex items-center align-center">
              <img
                className="px-2 cursor-pointer w-[50px]"
                src={assets.whatsap}
                alt=""
              />
              <p className="text-white text-xxl px-2">
                (+237) 653 859 570 / 695 372 674
              </p>
            </div>
            <div className=" flex items-center">
              <img
                className=" cursor-pointer mr-1 w-[40px]"
                src={assets.facebook}
                alt=""
              />
              <img
                className=" cursor-pointer mr-1 w-[40px]"
                src={assets.whatsap}
                alt=""
              />
              <img
                className=" cursor-pointer mr-1 w-[40px]"
                src={assets.linkedin}
                alt=""
              />
              <p className="text-white text-xxl">Brise Services</p>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <div className=" flex py-1 justify-center text-white bg-orange-700">
                Un commentaire ?
              </div>

              <textarea
                name="message"
                id=""
                className="w-[100%] relative"
                cols="40"
                placeholder="Entrez vos informations et envoyez nous un commentaire ici..."
                required
              ></textarea>
              <button type="submit">
                <img
                  src={assets.send_icon}
                  alt=""
                  className="rounded-md w-[50px] p-3 rotate-180 hover:bg-orange-200 transition"
                />
              </button>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSecondary;
