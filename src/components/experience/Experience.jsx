import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>مواقع التواصل الاجتماعي</h5>
      <h2>Social Media Posts</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Instagram - انستغرام</h3>
          <div className="experience__content">
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Twitter - تويتر</h3>
          <div className="experience__content">
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience