import tw, { styled } from 'twin.macro'

const Container = styled.section(({ higher, noMargin }) => [
  tw`container my-16`,
  higher && tw`my-32`,
  noMargin && tw`my-0`
])

export default Container
