import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Social from '../../components/Social'
import ContactForm from '../../components/ContactForm'
import * as S from './styled'
import { Container } from '../../components/Container'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

const Contact = () => {
  const intl = useIntl()

  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "socialLinks" } }) {
          frontmatter {
            email
            phone
            social {
              label
              url
            }
          }
        }
      }
    `
  )

  const socialLinks = markdownRemark.frontmatter

  return (
    <Container id={intl.formatMessage({ id: 'nav.contact.url' })}>
      <S.Wrapper>
        <S.TextWrapper>
          <S.Title data-sal="slide-up">
            <FormattedMessage id="contact.title" />
          </S.Title>
          <S.InfoWrapper data-sal="slide-up">
            {/* <S.MapIcon /> <S.InfoItem>Rua Parque Antârtica, 329 <br /> Morumbi, Foz do Iguaçu -
      PR, Brazil</S.InfoItem> */}
            <S.EnvelopeIcon /> <S.InfoItem>{socialLinks.email}</S.InfoItem>
            <S.PhoneIcon /> <S.InfoItem>{socialLinks.phone}</S.InfoItem>
          </S.InfoWrapper>
          <Social data-sal="slide-up" socialLinks={socialLinks.social} />
        </S.TextWrapper>
        <ContactForm data-sal="slide-up" />
      </S.Wrapper>
    </Container>
  )
}

export default Contact
