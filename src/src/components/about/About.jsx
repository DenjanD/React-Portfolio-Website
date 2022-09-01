import React from "react";
import "./about.css";

import ME from "../../assets/me-about.png";
import { TbAward } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-img">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about-content text-white">
          <div className="about-card">
            <article className="about-card-body">
              <span className="about-icon-variant">
                <TbAward className="about-icon" />
              </span>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className="about-card-body">
              <span className="about-icon-variant">
                <HiOutlineUserGroup className="about-icon" />
              </span>
              <h5>CLients</h5>
              <small>3 Client</small>
            </article>

            <article className="about-card-body">
              <span className="about-icon-variant">
                <FaLaptopCode className="about-icon" />
              </span>
              <h5>Projects</h5>
              <small>3 Project</small>
            </article>
          </div>
          <p>
            Hi! I'm Muammar Alfien Zaidan, a full-stack developer and a
            freelancer based in Cimahi. I specialized on back end and front end
            website development. I have 1+ years of involvement with web
            development. My backend abilities are PHP, Laravel, Javascript,
            MySQL, Java, and C#. I also have front end abilities like HTML, CSS,
            Javascript, VueJs, and Boostrap.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Hangout
          </a>
        </div>
      </div>
    </section>
  );
};
