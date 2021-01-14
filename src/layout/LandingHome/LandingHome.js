import React, { Component } from 'react'
import donut from '../../assets/images/donut.png'
import Button from '../../components/Button'

class LandingHome extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='landing__title'>
          Tech Donut <img alt='Donut' src={donut} height='100px' />
        </div>
        <div className='landing__subtitle'>Move your ass and bring us a donut</div>
        <div className='landing__user-info'>
          Fullstack Developers
          <p className='landing__user-info--paragraph'>Frontend | Backend enthusiasts</p>
        </div>
        <Button text={'Projects'} />
      </div>
    )
  }
}
export default LandingHome
