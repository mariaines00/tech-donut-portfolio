import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialLink = (props) => {
  return (
    <div className='social'>
      <a className='social--color' href={props.linkedin} target='_blank' rel='noreferrer'>
        <FaLinkedin size={30} />
      </a>
      <a
        className='social--color social--padding'
        href={props.github}
        target='_blank'
        rel='noreferrer'>
        <FaGithub size={30} />
      </a>
      {props.showGithubGraphic}
    </div>
  )
}

export default SocialLink
