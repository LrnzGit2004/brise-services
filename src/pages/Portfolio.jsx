import React from "react";
import Title from "../components/Title";
import PortfolioGallery from "../components/PortfolioGallery";
import FooterSecondary from "../components/FooterSecondary";

const Portfolio = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Title text="Portfolio" />
      <PortfolioGallery />
      <FooterSecondary />
    </div>
  );
};

export default Portfolio;
