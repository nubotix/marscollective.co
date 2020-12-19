import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { BiEnvelope, BiPhone } from 'react-icons/bi'

import Container from '@components/container'
import { H2 } from '@components/heading'
import Social from '@components/social'
import ContactForm from '@components/contact-form'

const Contact = ({
  button,
  email,
  message,
  name,
  siteMetadata,
  successMessage,
  title,
  titleForm
}) => (
  <Container data-sal="slide-up">
    <div
      css={[
        tw`grid gap-8 lg:(grid-cols-2 items-center bg-gray rounded-3xl p-16)`
      ]}
    >
      <div>
        <H2>{title}</H2>
        <div css={[tw`space-y-4`]}>
          <div css={[tw`flex gap-4`]}>
            <BiEnvelope size={20} />
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
          </div>
          <div css={[tw`flex gap-4`]}>
            <BiPhone size={20} />
            {siteMetadata.phone}
          </div>
          <Social socialData={siteMetadata.social} />
        </div>
      </div>
      <ContactForm
        button={button}
        email={email}
        message={message}
        name={name}
        successMessage={successMessage}
        titleForm={titleForm}
      />
    </div>
  </Container>
)

export default Contact

Contact.propTypes = {
  button: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  siteMetadata: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleForm: PropTypes.string.isRequired
}
