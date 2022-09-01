import React from "react";
import "./services.css";
import ServiceContent from "./ServiceContent";

export const Services = () => {
  return (
    <section id="service">
      <h5>What I Can Do For You</h5>
      <h2>Services</h2>

      <div className="container service-container text-white">
        <ServiceContent
          title="Website Development"
          li1="Create your own various types of websites;"
          li2="Make your own website interface design;"
          li3="Design, deployment and maintain your website."
        />
        <ServiceContent
          title="Database Design"
          li1="Design the database according to your business logic and processes;"
          li2="Presenting a database with an easy-to-understand model;"
          li3="Computerize the database design for further integration with your system."
        />
        <ServiceContent
          title="Graphic Design"
          li1="Design logos for various purposes;"
          li2="Logos for formal and informal organizations;"
          li3="Coordinate related to your logo design."
        />
      </div>
    </section>
  );
};
