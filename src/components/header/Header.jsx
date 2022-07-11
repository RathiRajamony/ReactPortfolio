import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Images/Image1.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
   <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Rathi</h1>
      <h5 className="text-light">Dotnet Developer</h5>
      <CTA />
      <HeaderSocials />
      <div>
        <img src={ME} className="me" alt='me'/>
      </div>
      
      <a href='#contact' className='scroll__down'>Scroll Down</a>
     </div>
   </header>
  )
}

export default header