import React from 'react'
import './about.css'
import pcs from '../../assets/pcs.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5 className='text1'>وجهتك الأولى</h5>
      <h2>لعرض جميع قطع الاجهزه الجديد و المستعمل</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={pcs} alt="pcs" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>قائمين</h5>
              <small>3+ سنوات</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>تم عرض</h5>
              <small>2000+ جهاز</small>
            </article>

          </div>

          <p className='para'>
          حساب لعرض كل ما يتعلق بأجهزه الكمبيوتر وملحقاتها
          <br />
          لعرض السلعه الرجاء التواصل عبر الواتساب حياكم الله 
          </p>

          <a href="#contact" className='btn btn-primary'>للتواصل</a>
        </div>
      </div>
    </section>
  )
}

export default About