import React from "react";
import "./services.css";
import "../../index.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const Services = () => {
  return (
    <section id="service">
      <h5>What I Can Do For You</h5>
      <h2>Services</h2>

      <div className="container service-container text-white">
        <article className="service-content">
          <div className="service-header">
            <h3>Website Development</h3>
          </div>
          <ul className="service-body">
            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>Create your own various types of websites;</p>
            </li>

            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>Make your own website interface design;</p>
            </li>

            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>Design, deployment and maintain your website.</p>
            </li>
          </ul>
        </article>

        <article className="service-content">
          <div className="service-header">
            <h3>Database Design</h3>
          </div>
          <ul className="service-body">
            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>
                Design the database according to your business logic and
                processes;
              </p>
            </li>
            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>Presenting a database with an easy-to-understand model;</p>
            </li>
            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>
                Computerize the database design for further integration with
                your system.
              </p>
            </li>
          </ul>
        </article>

        <article className="service-content">
          <div className="service-header">
            <h3>Graphic Design</h3>
          </div>
          <ul className="service-body">
            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>Design logos for various purposes;</p>
            </li>
            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>Logos for formal and informal organizations;</p>
            </li>
            <li>
              {/* <BsFillCheckCircleFill className="service-body-icon" /> */}
              <p>Coordinate related to your logo design.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
