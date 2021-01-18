import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialLink = (props) => {
  return (
    <div>
      <a className='social' href={props.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedin size={30}/>
      </a>
      <a className='social' href={props.github} target="_blank" rel="noreferrer">
        <FaGithub size={30}/>
      </a>
    </div>
  )
}

export default SocialLink
