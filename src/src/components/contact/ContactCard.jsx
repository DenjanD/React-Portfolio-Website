import React from 'react'
import './contact.css'

export const ContactCard = ({platform, address, icon, href}) => {
  return (
    <article className="contact-card">
        <span className='contact-icon'>{icon}</span>
        <h4>{platform}</h4>
        <h5>{address}</h5>
        <a href={href} target="_blank">Send a message</a>
    </article>
  )
}
