import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'; 
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0gv5dlv', 'template_uc0n5jg', form.current,'B1MxnAn6LSLYNN30f',
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
           <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>atul.r20@iiits.in</h5>
            <a href="mailto:atul.r20@iiits.in" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
           <FaLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Contact through Linkedin</h5>
            <a href="https://www.linkedin.com/in/atul-raj-755184215/" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your Name' required/>
          <input type="email" name='email' placeholder='Enter your Email' required/>
          <textarea name="msg" rows="10" placeholder='Enter your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact