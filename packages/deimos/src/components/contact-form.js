import React from 'react'
import tw from 'twin.macro'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
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
      <div css={[tw`bg-mint-dark rounded-3xl p-6 space-y-4`]}>
        <H3>{titleForm}</H3>
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
        <Button type="submit" label={button} />
      </div>
    )}
  </NetlifyForm>
)

export default ContactForm
