import React, { Component } from 'react'
import donutPink from '../../assets/images/donut_1.png'
import donutYellow from '../../assets/images/donut_2.png'
import donutBlue from '../../assets/images/donut_3.png'

import Button from '../../components/Button'

class LandingHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      donuts: [donutPink, donutYellow, donutBlue],
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
        <Button text={'Projects'} />
      </div>
    )
  }
}
export default LandingHome
