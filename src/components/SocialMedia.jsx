import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div style={{cursor:'pointer'}} onClick={()=>{window.open('https://github.com/s-atyam', '_blank')}}>
      <FaGithub />
    </div>
    <div style={{cursor:'pointer'}} onClick={()=>{window.open('https://www.linkedin.com/in/satyam-bharti-aa9078219/','_blank')}}>
      <FaLinkedin />
    </div>
  </div>
);

export default SocialMedia;