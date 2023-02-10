import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiInstagramLine, RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>تواصل معنا</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>4salepcq8@gmail.com</h5>
            <a href="4salepcq8@gmail.com" target="_blank">ارسل إيميل</a>
          </article>
          <article className="contact__option">
            <RiInstagramLine className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>4salepc</h5>
            <a href="https://www.instagram.com/4salepc" target="_blank">تواصل على الخاص</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+965 56571123</h5>
            <a href="https://api.whatsapp.com/send/?phone=96556571123" target="_blank">تواصل واتساب</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='الأسم' required />
          <input type="email" name='email' placeholder='إيميل التواصل' required />
          <textarea name="message" rows="7" placeholder='رسالتك' required ></textarea>
          <button type='submit' className='btn btn-primary'>قم بالإرسال</button>
        </form>
      </div>
    </section>
  )
}

export default Contact