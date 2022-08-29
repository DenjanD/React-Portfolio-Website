import React from "react";
import "./testimonials.css";

export const TestimonialsContent = ({ avatar, name, review, href }) => {
  return (
    <article className="testimonials-card">
      <div className="client-avatar">
        <img src={avatar} alt="Avatar 1" />
      </div>
      <h5 className="client-name">{name}</h5>
      <a href={href}>{review}</a>
    </article>
  );
};
