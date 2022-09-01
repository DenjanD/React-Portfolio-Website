import React from "react";

const ServiceContent = ({ title, li1, li2, li3 }) => {
  return (
    <article className="service-content">
      <div className="service-header">
        <h3>{title}</h3>
      </div>
      <ul className="service-body">
        <li>
          <p> {li1} </p>
        </li>

        <li>
          <p> {li2} </p>
        </li>

        <li>
          <p> {li3} </p>
        </li>
      </ul>
    </article>
  );
};

export default ServiceContent;
