import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Social from './Social'
import ContactForm from './contact-form'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import { BiEnvelope, BiPhone } from 'react-icons/bi'

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
    <div
      className="container"
      id={intl.formatMessage({ id: 'nav.contact.url' })}
    >
      <div className="grid gap-16 lg:grid-cols-2 md:p-8 lg:p-16 rounded-3xl lg:bg-gray">
        <div className="self-center">
          <h2 className="text text-left" data-sal="slide-up">
            <FormattedMessage id="contact.title" />
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-8" data-sal="slide-up">
            <BiPhone /> <span>{socialLinks.email}</span>
            <BiEnvelope /> <span>{socialLinks.phone}</span>
          </div>
          <Social data-sal="slide-up" socialLinks={socialLinks.social} />
        </div>
        <ContactForm data-sal="slide-up" />
      </div>
    </div>
  )
}

export default Contact
