import React from "react";
import "./portfolio.css";
import { PortfolioContent } from "./PortfolioContent";
import IMG1 from "../../assets/puskeswan.png";
import IMG2 from "../../assets/silakend.png";

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
      </div>
    </section>
  );
};
