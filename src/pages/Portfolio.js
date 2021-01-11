import React, { Component } from 'react'

import LandingHome from '../layout/LandingHome/LandingHome'
import About from '../layout/About/About'
import Contact from '../layout/Contact/Contact'

class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio'>
        <div className='portfolio__content'>
          <div className='content__landing'>
            <LandingHome />
          </div>
          <div className='content__about'>
            <About />
          </div>
          <div className='content__contact'>
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
