import React from 'react'
import PropTypes from 'prop-types'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
import tw from 'twin.macro'

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
  <NetlifyForm
    name="Form"
    action="/"
    honeypotName="bot-field"
    data-sal="slide-up"
  >
    {({ handleChange, success, error }) => (
      <div css={[tw`bg-mint-secondary rounded-3xl p-6 space-y-4 lg:p-8`]}>
        <h3 css={[tw`text-white`]}>{titleForm}</h3>
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
        <div css={[tw`flex items-center space-x-4 text-white`]}>
          <Button
            type="submit"
            label={button}
            css={[tw`border-white text-white`]}
          />
          {success && <p>{successMessage}</p>}
          {error && <p>An error occurred, please try again...</p>}
        </div>
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
