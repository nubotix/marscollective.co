import React from 'react'

import * as S from './styled'
import i18next from '../../i18n/config'

const LanguageSelector = () => {
  const changeLanguage = lng => {
    i18next.changeLanguage(lng)
  }

  return (
    <S.Wrapper>
      <S.Item onClick={() => changeLanguage('en')} className="en">
        [en]
      </S.Item>

      <S.Item onClick={() => changeLanguage('es')} className="es">
        [es]
      </S.Item>

      <S.Item onClick={() => changeLanguage('pt')} className="pt">
        [pt]
      </S.Item>
    </S.Wrapper>
  )
}

export default LanguageSelector
