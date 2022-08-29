import React from "react";
import "./contact.css";
import { Form } from "./Form";
import { ContactCard } from "./ContactCard";
import { MdOutlineMail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-option">
          <ContactCard
            platform="Email"
            href="mailto:denjandbusiness@gmail.com"
            address="denjandbusiness@gmail.com"
            icon={<MdOutlineMail />}
          />
          <ContactCard
            platform="Whatsapp"
            href="https://api.whatsapp.com/send?phone=085759160274"
            address="+62857-5916-0274"
            icon={<ImWhatsapp />}
          />
          <ContactCard
            platform="Linkedin"
            href="https://www.linkedin.com/in/ammarzaidan/"
            address="Ammar Zaidan"
            icon={<SiLinkedin />}
          />
        </div>

        <Form />
      </div>
    </section>
  );
};
