import React from 'react'
import tw from 'twin.macro'
import { RiCopyleftLine } from 'react-icons/ri'

import Container from '@components/container'
import Logo from '@components/logo'
import Nav from '@components/nav'

const Footer = () => (
  <Container smaller>
    <footer
      css={[
        tw`grid gap-4 justify-items-center lg:(flex justify-between items-center)`
      ]}
    >
      <div css={[tw`w-28`]}>
        <Logo />
      </div>
      <div css={[tw`hidden xl:block`]}>
        <Nav />
      </div>
      <span css={[tw`flex items-center`]}>
        Mars Collective <RiCopyleftLine size={12} css={[tw`mx-1`]} />
        {new Date().getFullYear()}
      </span>
    </footer>
  </Container>
)

export default Footer
