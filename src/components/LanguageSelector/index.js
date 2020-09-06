import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'

import * as S from './styled'

const LanguageSelector = () => {
  const { languages, originalPath } = useI18next()

  return (
    <>
      {languages.map(lng => (
        <S.Item key={lng}>
          <S.ItemLink to={originalPath} language={lng} activeClassName="active">
            [{lng}]
          </S.ItemLink>
        </S.Item>
      ))}
    </>
  )
}

export default LanguageSelector
