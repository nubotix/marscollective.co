import React from 'react'

import All from '../../components/WorkQueries/All'
import WebDesign from '../../components/WorkQueries/WebDesign'
import Branding from '../../components/WorkQueries/Branding'
import SocialMedia from '../../components/WorkQueries/SocialMedia'
import Audiovisual from '../../components/WorkQueries/Audiovisual'

import * as S from './styled'
import { Container } from '../../components/Container'
import { H2 } from '../../components/Typography'
import { Button } from '../../components/Buttons'
import { Trans } from 'gatsby-plugin-react-i18next'

const OurWork = () => (
  <Container id="our-work">
    <S.Wrapper>
      <S.ItemsWrapper>
        <H2 data-sal="slide-up">
          <Trans>Our work</Trans>
        </H2>
        <S.ItemsListWrapper>
          <S.ItemsList data-sal="slide-up">
            <S.Item>
              <Trans>All</Trans>
            </S.Item>
            <S.Item>
              <Trans>Web design</Trans>
            </S.Item>
            <S.Item>
              <Trans>Branding</Trans>
            </S.Item>
            <S.Item>
              <Trans>Social media</Trans>
            </S.Item>
            <S.Item>
              <Trans>Audiovisual</Trans>
            </S.Item>
          </S.ItemsList>
          <a
            href="https://www.behance.net/marscollective"
            title="Behance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button data-sal="slide-up">
              <Trans>View more</Trans>
            </Button>
          </a>
        </S.ItemsListWrapper>
      </S.ItemsWrapper>
      <div data-sal="slide-up">
        <S.ImagesWrapper>
          <All />
        </S.ImagesWrapper>
        <S.ImagesWrapper>
          <WebDesign />
        </S.ImagesWrapper>
        <S.ImagesWrapper>
          <Branding />
        </S.ImagesWrapper>
        <S.ImagesWrapper>
          <SocialMedia />
        </S.ImagesWrapper>
        <S.ImagesWrapper>
          <Audiovisual />
        </S.ImagesWrapper>
      </div>
    </S.Wrapper>
  </Container>
)

export default OurWork
