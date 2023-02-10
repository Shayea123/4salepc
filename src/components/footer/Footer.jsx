import React from 'react'
import './footer.css'
import {FaFacebookF, FaWhatsapp} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>4SALEPC-</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Social Media</a></li>
        <li><a href="#services">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://api.whatsapp.com/send/?phone=96556571123"><FaWhatsapp/></a>
        <a href="https://www.instagram.com/4salepc/"><FiInstagram/></a>
        <a href="https://twitter.com/4salepcq8"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 4SALEPC-. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer