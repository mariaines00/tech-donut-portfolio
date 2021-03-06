import React, { Component } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

class ShowGithubGraphic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showGraphic: false,
    }
  }

  render() {
    return (
      <>
        <button
          className='graphic arrow--padding'
          type='button'
          onClick={() => {
            this.setState({ showGraphic: !this.state.showGraphic })
          }}>
          {this.state.showGraphic ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
        </button>
        <div>
          {this.state.showGraphic ? (
            <img
              className='graphic--margin'
              alt=''
              src={this.props.graphic}
              width='903'
              height='173'
            />
          ) : null}
        </div>
      </>
    )
  }
}
export default ShowGithubGraphic
