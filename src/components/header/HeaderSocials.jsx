import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='htpps://linkedin.com/in/prempawar' target="_blank"><BsLinkedin /></a>
        <a href='htpps://github.com/prempawar' target="_blank"><BsGithub /></a>
        <a href='htpps://twitter.com/prempawar28' target="_blank"><BsTwitter /></a>
        
    </div>
  )
}

export default HeaderSocials