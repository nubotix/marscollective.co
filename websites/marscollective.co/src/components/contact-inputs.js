import React from 'react'
import { Input, TextArea } from './input'
import { useIntl } from 'gatsby-plugin-intl'

const ContactInputs = () => {
  const intl = useIntl()

  return (
    <div className="grid gap-4">
      <Input
        type="text"
        id="name"
        label={intl.formatMessage({ id: 'contact.form.name' })}
        required
      />
      <Input
        type="email"
        id="email"
        label={intl.formatMessage({ id: 'contact.form.email' })}
        required
      />
      <TextArea
        id="message"
        label={intl.formatMessage({ id: 'contact.form.message' })}
        required
      />
    </div>
  )
}

export default ContactInputs
