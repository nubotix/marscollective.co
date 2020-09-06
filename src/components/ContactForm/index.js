import React, { Component } from 'react'

import ContactInputs from '../ContactInputs'
import * as S from './styled'
import { ButtonGhostWhite } from '../Buttons'
import { Trans } from 'gatsby-plugin-react-i18next'

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
          <Trans>Contact us</Trans>
        </S.Title>
        <S.Form
          action="/.netlify/functions/sendMail"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <ContactInputs />
          <S.SubmitWrapper>
            <S.Alert>{message ? <Trans>{message}</Trans> : ''}</S.Alert>
            <ButtonGhostWhite type="submit" id="sendMail">
              <Trans>Send</Trans>
            </ButtonGhostWhite>
          </S.SubmitWrapper>
        </S.Form>
      </S.Wrapper>
    )
  }
}

export default ContactForm
