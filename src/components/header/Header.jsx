import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import { Socials } from './Socials'
import Typewriter from "typewriter-effect";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I ' am</h3>
        <h1 className='my-identity'>
          <Typewriter

            onInit={(typewriter)=> {
            typewriter
              
            .typeString("Muammar Alfien Zaidan")
              
            .pauseFor(1000)
            .deleteAll()
            .typeString("Freelancer")
            
            .pauseFor(1000)
            .deleteAll()
            .typeString("Fullstack Developer")
            
            .start();
            
          }}
        
            
          />
        </h1>
        {/* <h4 className="text-light">Fullstack Developer</h4> */}

        <CTA/>
        <Socials/>

        <div className="me">
          <img src={ME} className="img-me" alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
       
      </div>
    </header>
  )
}
