import React from "react";
import Title from "../components/Title";
import PortfolioGallery from "../components/PortfolioGallery";
import FooterSecondary from "../components/FooterSecondary";

const Portfolio = () => {
  return (
    <div>
      <Title text="Portfolio" />
      <PortfolioGallery />
      <FooterSecondary />
    </div>
  );
};

export default Portfolio;
