import React from 'react'
import SocialLink from './SocialLink'

export const Person = (props) => {
  return (
    <div className='about__box'>
      <img className='about__box--image' alt='' src={props.image} width='150' height='200' />
      <div>
        <div className='about__box--title'>{props.title}</div>
        <div className='about__box--subtitle'>{props.subtitle}</div>
        <div className='about__box--description'>{props.description}</div>
        <SocialLink linkedin={props.links[0]} github={props.links[1]}></SocialLink>
      </div>
    </div>
  )
}

export const PersonReverse = (props) => {
    return (
      <div className='about__box--reverse'>
        <img className='about__box--reverse--image' alt='' src={props.image} width='150' height='200' />
        <div>
          <div className='about__box--reverse--title'>{props.title}</div>
          <div className='about__box--reverse--subtitle'>{props.subtitle}</div>
          <div className='about__box--description'>{props.description}</div>
          <SocialLink linkedin={props.links[0]} github={props.links[1]}></SocialLink>
        </div>
      </div>
    )
  }
