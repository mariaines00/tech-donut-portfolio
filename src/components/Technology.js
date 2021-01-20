import React from 'react'

import { SiReact, SiKotlin, SiRuby, SiDocker } from 'react-icons/si'

export const Technology = (props) => {
  return (
    <div className='technology__box'>
      <div className='technology__box-icon'>
        {
          {
            React: <SiReact size={80} className='technology__box-icon--size' />,
            Kotlin: <SiKotlin size={80} className='technology__box-icon--size' />,
            Ruby: <SiRuby size={80} className='technology__box-icon--size' />,
            Docker: <SiDocker size={80} className='technology__box-icon--size' />,
          }[props.name]
        }
      </div>
      <div>
        <div className='technology__box--subtitle'>{props.subtitle}</div>
        <div className='technology__box--description'>{props.description}</div>
      </div>
    </div>
  )
}
