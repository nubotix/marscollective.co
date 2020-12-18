import React from 'react'
import tw from 'twin.macro'
import Container from '@components/container'
import Logo from '@components/logo'
import { RiCopyleftLine } from 'react-icons/ri'

const Footer = () => (
  <Container>
    <footer css={[tw`grid gap-4 justify-items-center`]}>
      <div css={[tw`w-28`]}>
        <Logo />
      </div>
      <span css={[tw`flex items-center`]}>
        Mars Collective <RiCopyleftLine size={12} css={[tw`mx-1`]} />
        {new Date().getFullYear()}
      </span>
    </footer>
  </Container>
)

export default Footer
