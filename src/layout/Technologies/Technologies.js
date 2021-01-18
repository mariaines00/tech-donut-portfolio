import React, { Component } from 'react'
import  { Technology } from '../../components/Technology'

class Technologies extends Component {
  render() {
    return (
      <div className='technologies'>
        <div className='technologies__title'>
          <h1>Stuff we use to build stuff</h1>
        </div>

        <Technology
        name={'React'}
        subtitle={'This very website was built using react'}
        description={'Random String trying to explain something random'}
        />
        <Technology
        name={'Kotlin'}
        subtitle={'Many years on experience using Kotlin'}
        description={'Random String trying to explain something random'}
        />
        <Technology
        name={'Ruby'}
        subtitle={'We complain about Ruby but we\'re pretty good at it'}
        description={'Random String trying to explain something random'}
        />
      </div>
    )
  }
}
export default Technologies
