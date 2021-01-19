import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <div>
        <form action='mailto:maria@gmail.com' method='GET'>
          <label>Name</label>
          <input name='subject' type='text' />
          <br />
          <label>Email</label>
          <input name='cc' type='email' />
          <br />
          <label>Message</label>
          <textarea name='body'></textarea>
          <br />
          <input type='submit' value='Send' />
        </form>
      </div>
    )
  }
}

export default ContactForm
