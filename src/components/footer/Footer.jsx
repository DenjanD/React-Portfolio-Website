import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Zaidan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Achievments</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://instagram.com">
          <FiLinkedin />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Zaidan. All Rights Reserved.</small>
      </div>
    </footer>
  );
};
