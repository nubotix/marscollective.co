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
        <H2>
          <Trans>Our work</Trans>
        </H2>
        <S.ItemsListWrapper>
          <S.ItemsList>
            <S.Item>All</S.Item>
            <S.Item>Web design</S.Item>
            <S.Item>Branding</S.Item>
            <S.Item>Social media</S.Item>
            <S.Item>Audiovisual</S.Item>
          </S.ItemsList>
          <a
            href="https://www.behance.net/marscollective"
            title="Behance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Trans>View more</Trans>
            </Button>
          </a>
        </S.ItemsListWrapper>
      </S.ItemsWrapper>
      <div>
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
