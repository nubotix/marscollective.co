import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Social from '../../components/Social'
import ContactForm from '../../components/ContactForm'
import * as S from './styled'
import { Container } from '../../components/Container'
import { Trans } from 'gatsby-plugin-react-i18next'

const Contact = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "socialLinks" } }) {
          frontmatter {
            email
            phone
          }
        }
      }
    `
  )

  const socialLinks = markdownRemark.frontmatter

  return (
    <Container id="contact">
      <S.Wrapper>
        <S.TextWrapper>
          <S.Title data-sal="slide-up">
            <Trans>Let's build amazing things together</Trans>
          </S.Title>
          <S.InfoWrapper data-sal="slide-up">
            {/* <S.MapIcon /> <S.InfoItem>Rua Parque Antârtica, 329 <br /> Morumbi, Foz do Iguaçu -
      PR, Brazil</S.InfoItem> */}
            <S.EnvelopeIcon /> <S.InfoItem>{socialLinks.email}</S.InfoItem>
            <S.PhoneIcon /> <S.InfoItem>{socialLinks.phone}</S.InfoItem>
          </S.InfoWrapper>
          <Social data-sal="slide-up" />
        </S.TextWrapper>
        <ContactForm data-sal="slide-up" />
      </S.Wrapper>
    </Container>
  )
}

export default Contact
