import React from 'react'

import * as S from './styled'
import { Input, TextArea } from '../Input'
import { useIntl } from 'gatsby-plugin-intl'

const ContactInputs = () => {
  const intl = useIntl()

  return (
    <S.Wrapper>
      <Input
        type="text"
        placeholder={intl.formatMessage({ id: 'contact.form.name' })}
        id="name"
        aria-label={intl.formatMessage({ id: 'contact.form.name' })}
        required
      />
      <Input
        type="email"
        placeholder={intl.formatMessage({ id: 'contact.form.email' })}
        id="email"
        aria-label={intl.formatMessage({ id: 'contact.form.email' })}
        required
      />
      <TextArea
        placeholder={intl.formatMessage({ id: 'contact.form.message' })}
        id="message"
        aria-label={intl.formatMessage({ id: 'contact.form.message' })}
        required
      />
    </S.Wrapper>
  )
}

export default ContactInputs
