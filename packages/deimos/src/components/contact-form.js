import React from 'react'
import tw from 'twin.macro'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
import { H3 } from '@components/heading'
import { Input, TextArea } from '@components/input'
import Button from '@components/button'

const ContactForm = () => (
  <NetlifyForm name="Form" action="/" honeypotName="bot-field">
    {({ handleChange, success, error }) => (
      <div css={[tw`bg-mint-dark rounded-3xl p-6 space-y-4`]}>
        <H3>Contact us</H3>
        <Honeypot />
        <Input
          type="text"
          label="Your name"
          name="name"
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          label="Your email"
          name="email"
          onChange={handleChange}
          required
        />
        <TextArea
          label="Your message"
          name="message"
          onChange={handleChange}
          required
        />
        {success && <p>Sucesso</p>}
        {error && <p>Error</p>}
        <Button type="submit" label="Send" />
      </div>
    )}
  </NetlifyForm>
)

export default ContactForm
