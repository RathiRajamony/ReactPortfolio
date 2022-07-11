import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My experience</h2>

     <div className="container experience__container">
       <div className="experience__frontend">
         <h3>Frontend Development</h3>
         <div className="experience__content">
           <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
             <div>
              <h4>C#</h4>
              <small className='text-light'>4.9 yrs Experienced</small>
             </div>
           </article>
           <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
            <div>
              <h4>ASP .Net</h4>
              <small className='text-light'>4.9 yrs Experienced</small>
            </div>
           </article>
           <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
             <div>
              <h4>MVC Architecture</h4>
              <small className='text-light'>2 yrs Experienced</small>
             </div>
           </article>
           <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>2 yrs Experienced</small>
              </div>
           </article>
           <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
             <div>
              <h4>CSS</h4>
              <small className='text-light'>2 yrs Experienced</small>
             </div>
           </article>
         </div>
       </div>

       <div className="experience__backend">
       <h3>Backend Development</h3>
         <div className="experience__content">
           <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
             <div>
              <h4>MS SQL</h4>
              <small className='text-light'>4.9 yrs Experienced</small>
             </div>
           </article>
          </div>
       </div>
     </div>
    </section>
  )
}

export default experience