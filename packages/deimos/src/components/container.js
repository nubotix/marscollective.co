import tw, { styled } from 'twin.macro'

const Container = styled.section(({ higher, noMargin, noPadding }) => [
  tw`container my-16`,
  higher && tw`my-32`,
  noMargin && tw`my-0`,
  noPadding && tw`px-0`
])

export default Container
