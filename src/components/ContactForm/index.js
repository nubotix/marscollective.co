import React from 'react'

import * as S from './styled'

const ContactForm = () => (
  <S.Wrapper>
    <S.Title>Contact us</S.Title>
    <form>
      <input
        type="text"
        placeholder="Your name"
        id="name"
        aria-label="Your name"
        required
      />
      <input
        type="email"
        placeholder="Your email"
        id="email"
        aria-label="Your email"
        required
      />
      <textarea
        placeholder="Your message"
        id="message"
        aria-label="Your message"
        required
      />

      <button type="submit" className="ghost white">
        Send
      </button>
    </form>
  </S.Wrapper>
)

export default ContactForm