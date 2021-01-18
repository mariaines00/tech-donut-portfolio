import React, { Component } from 'react'
import  { Technology } from '../../components/Technology'

class Technologies extends Component {
  render() {
    return (
      <div className='technologies'>
        <div className='technologies__title'>
          <h1>Stuff we use to build stuff</h1>
        </div>

        <div className='technologies__box'>
          <Technology
          name={'React'}
          subtitle={'This very website was built using react'}
          description={''}
          />
          <Technology
          name={'Kotlin'}
          subtitle={'Many years of hands-on production experience using Kotlin'}
          description={''}
          />
          <Technology
          name={'Ruby'}
          subtitle={'We complain about Ruby but we\'re great with it'}
          description={''}
          />
        </div>
      </div>
    )
  }
}
export default Technologies