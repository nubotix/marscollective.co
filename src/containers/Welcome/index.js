import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Image from '../../images/welcome.svg'
import * as S from './styled'
import { Container } from '../../components/Container'
import { H1, Big, Lead } from '../../components/Typography'
import { Button, ButtonGhost } from '../../components/Buttons'
import { translate } from '../../i18n/translate'

const Welcome = ({ t }) => (
  <Container>
    <S.Wrapper>
      <img src={Image} alt="We are Mars" />
      <S.TextWrapper>
        <H1>
          {t('welcome.weAre')} <Big>Mars</Big>
        </H1>
        <Lead>{t('welcome.text')}</Lead>
        <S.ButtonsWrapper>
          <AnchorLink to="/#contact" alt={t('welcome.primaryButton')}>
            <Button>{t('welcome.primaryButton')}</Button>
          </AnchorLink>
          <AnchorLink to="/#our-work" alt={t('welcome.ghostButton')}>
            <ButtonGhost>{t('welcome.ghostButton')}</ButtonGhost>
          </AnchorLink>
        </S.ButtonsWrapper>
      </S.TextWrapper>
    </S.Wrapper>
  </Container>
)

export default translate(Welcome)
