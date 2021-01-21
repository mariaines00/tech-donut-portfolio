import React, { Component } from 'react'
import donutPink from '../../assets/images/donut_1.png'
import donutYellow from '../../assets/images/donut_2.png'
import donutBlue from '../../assets/images/donut_3.png'
import donutPinkChoco from '../../assets/images/donut_1_choco.png'
import donutYellowChoco from '../../assets/images/donut_2_choco.png'
import donutBlueChoco from '../../assets/images/donut_3_choco.png'

class LandingHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      donuts: [donutPink, donutPinkChoco, donutYellow, donutYellowChoco, donutBlue, donutBlueChoco],
      selectedDonut: null,
    }
  }
  componentDidMount() {
    this.displayRandomDonut()
  }

  displayRandomDonut = () => {
    this.setState({
      selectedDonut: this.state.donuts[Math.floor(Math.random() * this.state.donuts.length)],
    })
  }

  render() {
    return (
      <div className='landing'>
        <div className='landing__title'>
          Tech Donut
          <img className='landing__img' alt='Donut' src={this.state.selectedDonut} height='100px' />
        </div>
        <div className='landing__subtitle'>Move your ass and bring us a donut</div>
        <div className='landing__user-info'>
          Fullstack Developers
          <p className='landing__user-info--paragraph'>Frontend | Backend enthusiasts</p>
        </div>
        <a className='button button--contact' href='#contact_section'>
          Contact us
        </a>
      </div>
    )
  }
}
export default LandingHome
