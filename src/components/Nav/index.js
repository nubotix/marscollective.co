import React from 'react'

import links from './content'
import languages from './languages'
import * as S from './styled'

const Nav = () => (
  <S.Wrapper>
    <S.List>
      {links.map((link, i) => (
        <S.Item key={i}>
          <S.LinkItem to={link.url} activeClassName="active">
            {link.label}
          </S.LinkItem>
        </S.Item>
      ))}
      {languages.map((language, i) => (
        <S.ItemLanguage key={i}>
          <S.LinkItem to={language.url} activeClassName="active">
            {language.label}
          </S.LinkItem>
        </S.ItemLanguage>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Nav
