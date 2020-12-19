import PropTypes from 'prop-types'
import tw, { styled } from 'twin.macro'

const Container = styled.section(({ smaller }) => [
  tw`max-w-screen-xl px-6 mx-auto my-16 sm:my-20 md:my-24 lg:(my-28 px-8)`,
  smaller && tw`my-8! md:my-12!`
])

export default Container

Container.propTypes = {
  smaller: PropTypes.bool
}
