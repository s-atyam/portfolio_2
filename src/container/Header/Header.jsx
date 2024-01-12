import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div id='home' className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Satyam</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="">MERN Developer</p>
        </div>
        <div className="info-cmp app__flex">
          <p className="p-text">I've been working with the <span style={{fontWeight:'400',fontSize:'1rem'}}>MERN</span> stack for about a year now, diving into React, Node.js, MongoDB, and Express.js. During this time, I've focused on developing web applications that are not just functional but also really grab the user's attention. I've also delved into the world of Data Structures and Algorithms, taking on more than <span style={{fontWeight:'400',fontSize:'1rem'}}>400 challenges on LeetCode</span>. It's been a great way for me to sharpen my problem-solving skills.</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <motion.img whileInView={{ opacity: [0, 1], scale:[0, 1] }} transition={{ duration: 1}} src={images.profile} alt="profile_bg" />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.node, images.react, images.express, images.mongodb, images.next ].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');