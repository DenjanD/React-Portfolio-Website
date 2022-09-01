import React from "react";
import "./portfolio.css";
import { BsGithub } from "react-icons/bs";

export const PortfolioContent = ({ image, title, github, demo }) => {
  return (
    <article className="portfolio-item">
      <div className="portfolio-img">
        <img className="app-img" src={image} alt={title} />
      </div>

      <h3>{title}</h3>

      <div className="portfolio-btn">
        {/* <a href={github} className='btn portfolio-btn-icon' target='_blank'><BsGithub/></a> */}
        <a href={demo} className="btn btn-primary" target="_blank">
          Check This Out
        </a>
      </div>
    </article>
  );
};
