import React, { Component } from 'react'
import Ana from '../../assets/images/Ana.png'
import Francisco from '../../assets/images/Francisco.png'
import Maria from '../../assets/images/Maria.png'
import { Person, PersonReverse } from '../../components/Person'
import anaGraphic from '../../assets/images/Ana_contributions.png'
import mariaGraphic from '../../assets/images/Maria_contributions.png'
import franciscoGraphic from '../../assets/images/Francisco_contributions.png'
import Bill from '../../assets/images/billing-bill_up.png'

class About extends Component {
  render() {
    const anaSocial = ['https://www.linkedin.com/in/ana-mimoso/', 'https://github.com/anafigm']
    const franciscoSocial = [
      'https://www.linkedin.com/in/francisco-carrola-540694171/',
      'https://github.com/francisco-carrola',
    ]
    const mariaSocial = [
      'https://www.linkedin.com/in/maria-ines-serra/',
      'https://github.com/mariaines00',
    ]
    return (
      <div className='about'>
        <Person
          title={'Ana Fig'}
          subtitle={'Cat Lover and coffee Enthusiast | Master Gamer | Full Stack Developer'}
          description={'Random String trying to explain something random'}
          image={Ana}
          links={anaSocial}
          graphic={anaGraphic}
        />
        <PersonReverse
          title={'Francisco Carrola'}
          subtitle={'Wannabe Chef | Earl Grey fanboy | Backend Developer'}
          description={'Random String trying to explain something random'}
          image={Francisco}
          links={franciscoSocial}
          graphic={franciscoGraphic}
        />
        <Person
          title={'Maria Inês Serra'}
          subtitle={'Zen Gardener | Pizza Critic | Backend Developer'}
          description={'Random String trying to explain something random'}
          image={Maria}
          links={mariaSocial}
          graphic={mariaGraphic}
        />
        <PersonReverse
          title={'Bill'}
          subtitle={'Retired Austronaut | Ray Charles fan | Ex - Redacted'}
          description={'States Secrets'}
          image={Bill}
          links={franciscoSocial}
          graphic={franciscoGraphic}
        />
      </div>
    )
  }
}
export default About
