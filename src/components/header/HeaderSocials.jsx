import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://www.facebook.com' target='_blank'><BsFacebook/></a>
        <a href='https://www.instagram.com' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials