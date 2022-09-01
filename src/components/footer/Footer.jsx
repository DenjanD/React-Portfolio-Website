import React from "react";
import "./footer.css";
import { Permalinks } from "./Permalinks";
import { FooterSocials } from "./FooterSocials";
import { FooterLogo } from "./FooterLogo";
import { FooterCopyright } from "./FooterCopyright";

export const Footer = () => {
  return (
    <footer>
      <FooterLogo />

      <Permalinks />

      <FooterSocials />

      <FooterCopyright />
    </footer>
  );
};
