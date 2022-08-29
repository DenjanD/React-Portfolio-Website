import React from 'react'
import './nav.css'
import { FiHome } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { BiHistory } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BsChatDots } from 'react-icons/bs'
import { AiOutlineProject } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react'

export const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
      <a href="#" 
        onClick={
          () => setActiveNav('#')
        } 
        className={
        activeNav === '#' ? 'active' : ''
        }> 
        <FiHome/> 
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiHistory/> </a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}> <RiServiceLine/> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <AiOutlineProject/> </a>
    </nav>
  )
}
