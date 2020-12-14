import React from 'react'

import All from '../../components/WorkQueries/All'
import WebDesign from '../../components/WorkQueries/WebDesign'
import Branding from '../../components/WorkQueries/Branding'
import SocialMedia from '../../components/WorkQueries/SocialMedia'
import Audiovisual from '../../components/WorkQueries/Audiovisual'

import * as S from './styled'
import Button from '../../components/button'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const OurWork = () => {
  const intl = useIntl()

  return (
    <div
      className="container"
      id={intl.formatMessage({ id: 'nav.portfolio.url' })}
    >
      <S.Wrapper>
        <S.ItemsWrapper>
          <h2 data-sal="slide-up">
            <FormattedMessage id="portfolio.title" />
          </h2>
          <S.ItemsListWrapper>
            <S.ItemsList data-sal="slide-up">
              <S.Item>
                <FormattedMessage id="portfolio.items.all" />
              </S.Item>
              <S.Item>
                <FormattedMessage id="portfolio.items.webDesign" />
              </S.Item>
              <S.Item>
                <FormattedMessage id="portfolio.items.branding" />
              </S.Item>
              <S.Item>
                <FormattedMessage id="portfolio.items.socialMedia" />
              </S.Item>
              <S.Item>
                <FormattedMessage id="portfolio.items.audiovisual" />
              </S.Item>
            </S.ItemsList>
            <a
              href="https://www.behance.net/marscollective"
              title="Behance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label={intl.formatMessage({
                  id: 'portfolio.button.label'
                })}
                primary
              />
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
    </div>
  )
}

export default OurWork
