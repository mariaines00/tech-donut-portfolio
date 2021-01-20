import React from 'react'
import ShowGithubGraphic from './ShowGithubGraphic'
import SocialLink from './SocialLink'

export const Person = (props) => {
  return (
    <div className='about__box'>
      <img className='about__box--image' alt='' src={props.image} width='180' height='190' />
      <div>
        <div className='about__box--title'>{props.title}</div>
        <div className='about__box--subtitle'>{props.subtitle}</div>
        <div className='about__box--description'>{props.description}</div>
        <SocialLink
          linkedin={props.links[0]}
          github={props.links[1]}
          showGithubGraphic={<ShowGithubGraphic {...props} graphic={props.graphic} />}></SocialLink>
      </div>
    </div>
  )
}

export const PersonReverse = (props) => {
  return (
    <div className='about__box--reverse'>
      <img
        className='about__box--reverse--image'
        alt=''
        src={props.image}
        width='180'
        height='190'
      />
      <div>
        <div className='about__box--reverse--title'>{props.title}</div>
        <div className='about__box--reverse--subtitle'>{props.subtitle}</div>
        <div className='about__box--description'>{props.description}</div>
        <SocialLink
          linkedin={props.links[0]}
          github={props.links[1]}
          showGithubGraphic={<ShowGithubGraphic graphic={props.graphic} />}></SocialLink>
      </div>
    </div>
  )
}
