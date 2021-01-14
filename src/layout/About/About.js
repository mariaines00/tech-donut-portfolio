import React, { Component } from 'react'
import Ana from '../../assets/images/Ana.png'
import Francisco from '../../assets/images/Francisco.png'
import Maria from '../../assets/images/Maria.png'
import  {Person, PersonReverse}from '../../components/Person'


class About extends Component {
  render() {
    return (
      <div className='about'>
        <Person
          description={'Cat Lover and coffee enthusiast | Master Gamer | Full Stack Developer'}
          title={'Ana Fig'}
          image={Ana}
        />
        <PersonReverse
          description={'Dog Lover and Tea enthusiast | Wannabe Chef | Backend Developer'}
          title={'Francisco Carrola'}
          image={Francisco}
        />
        <Person
          description={'Plants caretaker | Pizza demolisher | Backend Developer'}
          title={'Maria Inês Serra'}
          image={Maria}
        />
      </div>
    )
  }
}
export default About
