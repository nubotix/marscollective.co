import React from 'react'

import * as S from './styled'
import { Input, TextArea } from '../input'
import { useIntl } from 'gatsby-plugin-intl'

const ContactInputs = () => {
  const intl = useIntl()

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  )
}

export default ContactInputs
