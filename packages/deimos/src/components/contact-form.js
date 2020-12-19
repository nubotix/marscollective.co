import React from 'react'
import PropTypes from 'prop-types'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
import tw from 'twin.macro'

import { H3 } from '@components/heading'
import { Input, TextArea } from '@components/input'
import Button from '@components/button'

const ContactForm = ({
  button,
  email,
  message,
  name,
  successMessage,
  titleForm
}) => (
  <NetlifyForm name="Form" action="/" honeypotName="bot-field">
    {({ handleChange, success, error }) => (
      <div css={[tw`bg-mint-secondary rounded-3xl p-6 space-y-4 lg:p-8`]}>
        <H3 css={[tw`text-white`]}>{titleForm}</H3>
        <Honeypot />
        <Input
          type="text"
          label={name}
          name="name"
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          label={email}
          name="email"
          onChange={handleChange}
          required
        />
        <TextArea
          label={message}
          name="message"
          onChange={handleChange}
          required
        />
        {success && <p>{successMessage}</p>}
        {error && <p>Error</p>}
        <Button
          type="submit"
          label={button}
          css={[tw`text-white border-white`]}
        />
      </div>
    )}
  </NetlifyForm>
)

export default ContactForm

ContactForm.propTypes = {
  button: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
  titleForm: PropTypes.string.isRequired
}
