import React from "react";
import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiPhp } from "react-icons/si";
import "../../index.css";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skils I Have</h5>
      <h2 className="text-beige">My Skills</h2>

      <div className="container experience-container">
        <div className="experience-fe text-white">
          <h3>Frontend Developer</h3>
          <div className="experience-content">
            <article className="experience-text">
              <SiHtml5 className="experience-icon" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience-text">
              <FaCss3 className="experience-icon" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience-text">
              <BsBootstrapFill className="experience-icon" />
              <div>
                <h4>Boostrap</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience-text">
              <SiJavascript className="experience-icon" />
              <div>
                <h4>Javascript</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className="experience-text">
              <RiVuejsFill className="experience-icon" />
              <div>
                <h4>Vue JS</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
          </div>
        </div>

        <div className="experience-be text-white">
          <h3>Backend Developer</h3>
          <div className="experience-content">
            <article className="experience-text">
              <SiPhp className="experience-icon" />
              <div>
                <h4>PHP</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>

            <article className="experience-text">
              <SiJavascript className="experience-icon" />
              <div>
                <h4>Javascript</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>

            <article className="experience-text">
              <FaJava className="experience-icon" />
              <div>
                <h4>Java</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>

            <article className="experience-text">
              <FaLaravel className="experience-icon" />
              <div>
                <h4>Laravel</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>

            <article className="experience-text">
              <FaCheckCircle className="experience-icon" />
              <div>
                <h4>C#</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>

            <article className="experience-text">
              <GrMysql className="experience-icon" />
              <div>
                <h4>MySQL</h4>
                {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
