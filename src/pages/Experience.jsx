import React from "react";
import Footer from "../components/Footer";
import Title from "../components/Title";
import ProgressExp from "../components/ProgressBar/ProgressExp";

const Experience = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Title text="Expériences" />
      <ProgressExp />
      <Footer />
    </div>
  );
};

export default Experience;
