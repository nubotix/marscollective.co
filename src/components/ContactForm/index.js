import React, { Component } from 'react'

import ContactInputs from '../ContactInputs'
import * as S from './styled'
import { ButtonGhostWhite } from '../Buttons'
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
    console.log(response)
  }

  render() {
    const { message } = this.state

    return (
      <S.Wrapper>
        <S.Title>
          <FormattedMessage id="contact.form.title" />
        </S.Title>
        <S.Form
          action="/.netlify/functions/sendMail"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <ContactInputs />
          <S.SubmitWrapper>
            <S.Alert>
              {message ? <FormattedMessage id="contact.form.success" /> : ''}
            </S.Alert>
            <ButtonGhostWhite type="submit" id="sendMail">
              <FormattedMessage id="contact.form.button" />
            </ButtonGhostWhite>
          </S.SubmitWrapper>
        </S.Form>
      </S.Wrapper>
    )
  }
}

export default ContactForm
