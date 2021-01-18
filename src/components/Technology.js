import React from 'react'

import { SiReact, SiKotlin, SiRuby } from 'react-icons/si'

export const Technology = (props) => {
  return (
    <div className='technology__box'>
      <div className='technology__box--icon'>
        {
          {
            'React': <SiReact size={50}/>,
            'Kotlin': <SiKotlin size={50}/>,
            'Ruby': <SiRuby size={50}/>,
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
