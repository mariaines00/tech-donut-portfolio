import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className='contact__title'>GIVE US FEEDBACK</div>
        <form action='mailto:maria@gmail.com' method='GET' className='contact__form'>
          <label className='contact__form__label'>Name</label>
          <input className='contact__form__input' name='subject' type='text' />
          <br />
          <label className='contact__form__label'>Email</label>
          <input className='contact__form__input' name='cc' type='email' />
          <br />
          <label className='contact__form__label'>Message</label>
          <textarea className='contact__form__input--textarea' name='body'></textarea>
          <br />
          <input className='contact__form__input--submit' type='submit' value='Send' />
        </form>
      </div>
    )
  }
}

export default ContactForm
