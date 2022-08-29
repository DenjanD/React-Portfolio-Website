import React from 'react'
import './contact.css'

//Notification library
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// emailJs
import emailjs from 'emailjs-com'
import { useRef } from 'react';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mu9yc5b', 'template_qzdrmaf', form.current, 'BxY0-FQlMSQA3_Mel')
      .then((result) => {
        toast.info("Your email has been sent!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        }); 
      }, (error) => {
        toast.error("Ups! Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "dark",
        });
      });

      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} >
        <input type="text" name='name' placeholder='Your Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
        <button className='btn btn-primary' type='submit'>Send Message</button>

        <ToastContainer />
    </form>
    
  )
}
