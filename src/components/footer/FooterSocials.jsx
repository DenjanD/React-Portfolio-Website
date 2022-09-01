import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export const FooterSocials = () => {
  return (
    <div className="footer-socials">
      <a href="https://www.instagram.com/_ammar_zaidan/?hl=id" target="_blank">
        <FiInstagram />
      </a>
      <a href="https://www.linkedin.com/in/ammarzaidan/" target="_blank">
        <FiLinkedin />
      </a>
    </div>
  );
};
