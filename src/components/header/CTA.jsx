import React from 'react'
import CV from '../../assets/cv.pdf'


export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Check For My CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Hang Out</a>
    </div>
  )
}

export default CTA
