import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';

import emailjs from '@emailjs/browser'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', text: '', subject: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, text, subject } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.username,
  //     email: formData.email,
  //     text: formData.text,
  //     subject: formData.subject,
  //   };

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    console.log(process.env.REACT_APP_SERVICE_ID)
    console.log(process.env.REACT_APP_TEMPLATE_ID)
    console.log(process.env.REACT_APP_PUBLIC_KEY)
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_PUBLIC_KEY)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setLoading(false);
       setIsFormSubmitted(true);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

  return (
    <>
      <h2 className="head-text">Connect with Me, <span>Your Thoughts Matter</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:satyambharti080@gmail.com" className="p-text">satyambharti080@gmail.com</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Subject" name="subject" value={subject} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={text}
              name="text"
              onChange={handleChangeInput}
            />
          </div>
          {loading && <img style={{width:'60px'}} src={images.emailsend} alt="sending email" />}
          {!loading && <button type="button" className="p-text" onClick={handleSubmit}>Send Message</button>}
        </div>
      ) : (
        <div>
          <h3 className="head-text" style={{marginTop:'10rem'}}>
            Your Note is on its Way to My Inbox—Thanks!
          </h3>
        </div>
      )}
      <div className="copyright">
          <p className="p-text">@2024 SATYAM BHARTI  </p>
          <p className="p-text">All rights reserved </p>
          <div style={{display:'flex'}}>
          <FaGithub style={{cursor:'pointer',marginRight:'6px'}} onClick={()=>{window.open('https://github.com/s-atyam', '_blank')}} />
          <FaLinkedin style={{cursor:'pointer'}} onClick={()=>{window.open('https://www.linkedin.com/in/satyam-bharti-aa9078219/','_blank')}} />
          </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);