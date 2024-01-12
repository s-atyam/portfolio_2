import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { motion } from 'framer-motion'

import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        {/* Desktop navigation */}
        {/* logo */}
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="Logo" />
        </div>
        {/* links */}
        <ul className='app__navbar-link'>
            {['home','about','skills','work','contact'].map((item)=>(
                <li className='app__flex p-text' key={`link-${item}`}>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='app__navbar-menu'>
            <LuMenu onClick={()=>{setToggle(true)}}/>

            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                <IoCloseOutline onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar