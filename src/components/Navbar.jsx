import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`flex items-center justify-between py-5 font-medium  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] top-0  ${
        sticky ? "dark-nav" : ""
      }`}
    >
      <Link to="/">
        <img src={assets.logo_mini} className="w-36 logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-xl text-gray-300">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Maison</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>A propos</p>
        </NavLink>
        <NavLink to="/portfolio" className="flex flex-col items-center gap-1">
          <p>Portfolio</p>
        </NavLink>
        <NavLink to="/experience" className="flex flex-col items-center gap-1">
          <p>Experiences</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contacts</p>
        </NavLink>
      </ul>

      <img
        onClick={() => setVisible(true)}
        src={assets.menu_icon}
        className="w-11 cursor-pointer sm:hidden"
      />

      {/* SideBar menu pour petits ecran */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white bg-opacity-95 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            {" "}
            {/* fonction pour cacher la sideBar */}
            <img src={assets.back_icon} className="h-10 w-14" alt="" />
            <p className="text-xl">Retour</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-xl"
            to="/"
          >
            Maison
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-xl"
            to="/about"
          >
            A propos
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-xl"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-xl"
            to="/experience"
          >
            Experiences
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border text-xl"
            to="/contact"
          >
            Contacts
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
