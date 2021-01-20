import React, { Component } from 'react'

import LandingHome from '../layout/LandingHome/LandingHome'
import About from '../layout/About/About'
import Technologies from '../layout/Technologies/Technologies'
import Contact from '../layout/Contact/Contact'
import Copyright from '../layout/Copyright/Copyright'
import { FaArrowCircleUp } from 'react-icons/fa'

class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio'>
        <div className='portfolio__content'>
          <div className='content__landing'>
            <LandingHome />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Technologies />
          </div>
          <div>
            <Contact />
          </div>
          <div>
            <Copyright />
          </div>
          <a href='# ' className='to-top'>
            <FaArrowCircleUp size={40} className='to-top--icon' />
          </a>
        </div>
      </div>
    )
  }
}

export default Portfolio
