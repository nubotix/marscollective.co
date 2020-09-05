import React from 'react'

import * as S from './styled'
import { Input, TextArea } from '../Input'
import { ButtonGhostWhite } from '../Buttons'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const ContactForm = () => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <S.Title>
        <Trans>Contact us</Trans>
      </S.Title>
      <form>
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

        <ButtonGhostWhite type="submit">
          <Trans>Send</Trans>
        </ButtonGhostWhite>
      </form>
    </S.Wrapper>
  )
}

export default ContactForm
