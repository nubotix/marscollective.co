import React from 'react'
import PropTypes from 'prop-types'
import { BiEnvelope, BiPhone } from 'react-icons/bi'

import Social from '@components/social'
import ContactForm from '@components/contact-form'

const Contact = ({
  button,
  email,
  id,
  message,
  name,
  siteMetadata,
  successMessage,
  title,
  titleForm
}) => (
  <section className="container" id={id}>
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:bg-gray lg:rounded-3xl lg:p-16">
      <div>
        <h2 data-sal="fade">{title}</h2>
        <div className="space-y-6 lg:space-y-4" data-sal="fade">
          <div className="flex space-x-6 lg:space-x-4">
            <BiEnvelope className="w-6 h-6 lg:w-4 lg:h-4 lg:mt-1" />
            <a href={`mailto:${siteMetadata.email}`} className="text-default">
              {siteMetadata.email}
            </a>
          </div>
          <div className="flex space-x-6 lg:space-x-4">
            <BiPhone className="w-6 h-6 lg:w-4 lg:h-4 lg:mt-1" />
            <span className="text-default">{siteMetadata.phone}</span>
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
  </section>
)

export default Contact

Contact.propTypes = {
  button: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  siteMetadata: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleForm: PropTypes.string.isRequired
}
