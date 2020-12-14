import React, { Component } from 'react'

import ContactInputs from './contact-inputs'
import Button from './button'
import { FormattedMessage } from 'gatsby-plugin-intl'

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: null
    }
  }
  async handleSubmit(event) {
    event.preventDefault()
    const { target: form } = event
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }

    const response = await (
      await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    ).json()
    this.setState({
      message: response.message
    })
  }

  render() {
    const { message } = this.state
    return (
      <div className="p-8 bg-green rounded-3xl">
        <h3 className="text text-left m-0 mb-8">
          <FormattedMessage id="contact.form.title" />
        </h3>
        <div
          className="grid gap-8"
          action="/.netlify/functions/sendMail"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <ContactInputs />
          <div className="flex">
            <span className="flex-1 mr-8 self-center">
              {message ? <FormattedMessage id="contact.form.success" /> : ''}
            </span>
            {/* <FormattedMessage id="contact.form.button" /> */}
            <Button label="CONSERTAR" type="submit" id="sendMail" />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
