import React from 'react'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import { Container } from '../../components/Container'
import { H2, H3, H4 } from '../../components/Typography'
import { translate } from '../../i18n/translate'

const WhoWeAre = ({ t }) => {
  const data = useStaticQuery(
    graphql`
      query {
        Anderson: file(relativePath: { eq: "Team/AndersonLima.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        Daniel: file(relativePath: { eq: "Team/DanielSoares.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        Etienne: file(relativePath: { eq: "Team/EtienneBom.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        Frank: file(relativePath: { eq: "Team/FrankCendeno.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Container id="who-we-are">
      <S.Wrapper>
        <H2>
          <Fade bottom>{t('whoWeAre.title')}</Fade>
        </H2>
        <S.Itens>
          <S.Item>
            <S.Image fixed={data.Anderson.childImageSharp.fixed} />
            <S.TextWrapper>
              <H3>Anderson Lima</H3>
              <H4>{t('whoWeAre.anderson.position')}</H4>
            </S.TextWrapper>
          </S.Item>
          <S.Item>
            <S.Image fixed={data.Daniel.childImageSharp.fixed} />
            <S.TextWrapper>
              <H3>Daniel Soares</H3>
              <H4>{t('whoWeAre.daniel.position')}</H4>
            </S.TextWrapper>
          </S.Item>
          <S.Item>
            <S.Image fixed={data.Etienne.childImageSharp.fixed} />
            <S.TextWrapper>
              <H3>Etienne Bom</H3>
              <H4>{t('whoWeAre.etienne.position')}</H4>
            </S.TextWrapper>
          </S.Item>
          <S.Item>
            <S.Image fixed={data.Frank.childImageSharp.fixed} />
            <S.TextWrapper>
              <H3>Frank Cedeño</H3>
              <H4>{t('whoWeAre.frank.position')}</H4>
            </S.TextWrapper>
          </S.Item>
        </S.Itens>
      </S.Wrapper>
    </Container>
  )
}

export default translate(WhoWeAre)
