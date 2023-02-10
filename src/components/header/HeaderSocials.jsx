import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import {FiDribbble, FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://api.whatsapp.com/send/?phone=96556571123" target="_blank"><FaWhatsapp/></a>
        <a href="https://www.instagram.com/4salepc" target="_blank"><FaInstagram/></a>
        <a href="https://twitter.com/4salepcq8" target="_blank"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials