import React from 'react'

import * as S from './styled'
import { Input, TextArea } from '../Input'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const ContactInputs = () => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <Input
        type="text"
        placeholder={t('Your name')}
        id="name"
        aria-label={t('Your name')}
        required
      />
      <Input
        type="email"
        placeholder={t('Your email')}
        id="email"
        aria-label={t('Your email')}
        required
      />
      <TextArea
        placeholder={t('Your message')}
        id="message"
        aria-label={t('Your message')}
        required
      />
    </S.Wrapper>
  )
}

export default ContactInputs
