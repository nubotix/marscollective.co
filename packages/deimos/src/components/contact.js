import React from 'react'
import Container from '@components/container'
import { H2 } from '@components/heading'
import ContactForm from '@components/contact-form'

const Contact = ({ title }) => (
  <Container>
    <H2>{title}</H2>
    <ContactForm />
  </Container>
)

export default Contact
