import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1dwxta', 'template_rawvd8b', form.current, 'BMJZQGEPSEvITAgq9')

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail className='contact_icons'/>
            <h4>Email</h4>
            <h5>rathirabani@gmail.com</h5>
            <a href="mailto:rathirabani@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_icons'/>
            <h4>Messenger</h4>
            <h5>Rathi Rajamony</h5>
            <a href="https://m.me/rathi.rajamony" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiWhatsappLine className='contact_icons'/>
            <h4>Whatsapp</h4>
            <h5>Phone</h5>
            <a href="https://api.whatsapp.com/send?phone=+919080714757" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}> 
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' cols='30' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact