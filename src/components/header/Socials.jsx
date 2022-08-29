import React from "react";
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ammarzaidan/" target="_blank">
        <SiLinkedin />
      </a>
      <a href="https://github.com/DenjanD" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/_ammar_zaidan/?hl=id" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};
