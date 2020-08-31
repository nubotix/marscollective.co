import React from 'react'

import Icons from './Icons'
import links from './content'
import * as S from './styled'

const Social = () => (
  <S.Wrapper>
    {links.map((link, i) => {
      const Icon = Icons[link.label]

      return (
        <S.Item key={i}>
          <S.ItemLink
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.ItemLink>
        </S.Item>
      )
    })}
  </S.Wrapper>
)

export default Social
