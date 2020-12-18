import React from 'react'
import tw from 'twin.macro'
import Container from '@components/container'
import { H2 } from '@components/heading'
import Social from '@components/social'
import ContactForm from '@components/contact-form'
import { BiEnvelope, BiPhone } from 'react-icons/bi'

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
  <Container>
    <div css={[tw`grid gap-8`]}>
      <div css={[tw`grid gap-8`]}>
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
