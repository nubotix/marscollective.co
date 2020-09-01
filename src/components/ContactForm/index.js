import React from 'react'

import * as S from './styled'
import { translate } from '../../i18n/translate'

const ContactForm = ({ t }) => (
  <S.Wrapper>
    <S.Title>{t('contact.form.title')}</S.Title>
    <form>
      <input
        type="text"
        placeholder={t('contact.form.yourName')}
        id="name"
        aria-label={t('contact.form.yourName')}
        required
      />
      <input
        type="email"
        placeholder={t('contact.form.yourEmail')}
        id="email"
        aria-label={t('contact.form.yourEmail')}
        required
      />
      <textarea
        placeholder={t('contact.form.yourMessage')}
        id="message"
        aria-label={t('contact.form.yourMessage')}
        required
      />

      <button type="submit" className="ghost white">
        {t('contact.form.ghostButton')}
      </button>
    </form>
  </S.Wrapper>
)

export default translate(ContactForm)
