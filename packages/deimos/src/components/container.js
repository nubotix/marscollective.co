import tw, { styled } from 'twin.macro'

const Container = styled.section(({ noMargin, smaller }) => [
  tw`max-w-screen-xl px-6 mx-auto my-16 sm:my-20 md:my-24 lg:my-28`,
  noMargin && tw`my-0`,
  smaller && tw`my-8`
])

export default Container
