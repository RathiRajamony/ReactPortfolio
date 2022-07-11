import React from 'react'
import './about.css'
import ME from '../../Images/Image3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4.9 years working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Client</h5>
              <small>Bank of Montreal, Canada</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>  

          <p>
            Enthusiastic Software Engineer with proven success in Software Development and maintaining positive client relationships. 
            Ability to handle technical issues and risks and to act as a team player.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default about
