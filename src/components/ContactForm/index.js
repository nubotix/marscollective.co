import React from 'react'

import * as S from './styled'
import { Input, TextArea } from '../Input'
import { ButtonGhostWhite } from '../Buttons'
import { translate } from '../../i18n/translate'

const ContactForm = ({ t }) => (
  <S.Wrapper>
    <S.Title>{t('contact.form.title')}</S.Title>
    <form>
      <Input
        type="text"
        placeholder={t('contact.form.yourName')}
        id="name"
        aria-label={t('contact.form.yourName')}
        required
      />
      <Input
        type="email"
        placeholder={t('contact.form.yourEmail')}
        id="email"
        aria-label={t('contact.form.yourEmail')}
        required
      />
      <TextArea
        placeholder={t('contact.form.yourMessage')}
        id="message"
        aria-label={t('contact.form.yourMessage')}
        required
      />

      <ButtonGhostWhite type="submit" className="ghost white">
        {t('contact.form.ghostButton')}
      </ButtonGhostWhite>
    </form>
  </S.Wrapper>
)

export default translate(ContactForm)
