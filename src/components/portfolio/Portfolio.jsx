import React from "react";
import "./portfolio.css";
import { PortfolioContent } from "./PortfolioContent";
import IMG1 from "../../assets/puskeswan.png";
import IMG2 from "../../assets/silakend.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 className="text-beige">Portfolio</h2>

      <div className="container portfolio-container">
        <PortfolioContent
          image={IMG1}
          title="Animal Health Center E-Registration App"
          github="https://pendaftaranpuskeswan-cimahi.com/"
          demo="https://pendaftaranpuskeswan-cimahi.com/"
        />
        <PortfolioContent
          image={IMG2}
          title="Bandung PolMan Vehicle Service System"
          github="http://silakend.polman-bandung.ac.id/"
          demo="http://silakend.polman-bandung.ac.id/"
        />
        {/* <PortfolioContent image={IMG3} title="Lorem 3" github="https://github.com" demo="#"/>
        <PortfolioContent image={IMG4} title="Lorem 4" github="https://github.com" demo="#"/>
        <PortfolioContent image={IMG5} title="Lorem 5" github="https://github.com" demo="#"/>
        <PortfolioContent image={IMG6} title="Lorem 6" github="https://github.com" demo="#"/>          */}
      </div>
    </section>
  );
};
