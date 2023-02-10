import React from 'react'
import './header.css'
import CTA from './CTA'
import pcs from '../../assets/pcs.png'
import logo4sale from '../../assets/logo4sale.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hello I'm</h5> */}
        <h1><span className="span1">4SALE</span><span className='span2'>PC</span><span className='span3'>-</span></h1>
        <h5 className="text-light">لعرض كل ما يتعلق بالاجهزه</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={logo4sale} alt="logo4sale" />
        </div>

        <a href="#contact" className='scroll__down'>أسفل الصفحة</a>
      </div>
    </header>
  )
}

export default Header
