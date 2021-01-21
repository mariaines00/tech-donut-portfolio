import React, { Component } from 'react'
import { OWNERS_EMAILS, EMAIL_SUBJECT } from '../constants/ui.constants'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    this.onEmailChange = this.onEmailChange.bind(this)
  }

  onEmailChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { name, email, message } = this.state

    const mailTo =
      'mailto:' +
      OWNERS_EMAILS +
      '?cc=' +
      email +
      '&subject=' +
      name +
      EMAIL_SUBJECT +
      '&body=' +
      message

    return (
      <div>
        <div className='contact__title'>GIVE US FEEDBACK</div>
        <form className='contact__form'>
          <label className='contact__form__label'>Name</label>
          <input
            className='contact__form__input'
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.onEmailChange}
          />
          <br />
          <label className='contact__form__label'>Email</label>
          <input
            className='contact__form__input'
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <br />
          <label className='contact__form__label'>Message</label>
          <textarea
            className='contact__form__input--textarea'
            name='message'
            value={this.state.message}
            onChange={this.onEmailChange}
            type='text'
            rows='7'
            cols='60'></textarea>
          <br />
          <a className='contact__form__input--submit' href={mailTo}>
            Send
          </a>
        </form>
      </div>
    )
  }
}

export default ContactForm
