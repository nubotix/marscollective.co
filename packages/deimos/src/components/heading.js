import tw, { styled } from 'twin.macro'
import PropTypes from 'prop-types'

const reset = tw`m-0 p-0`
const baseBigger = tw`font-black font-heading! uppercase`
const base = tw`font-body font-semibold leading-6`

function hasCenter(center) {
  return center && tw`text-center`
}

function hasMint(mint) {
  return mint ? tw`text-mint` : tw`text-white`
}

export const H1 = styled.h1(({ bigger, center, mint }) => [
  reset,
  baseBigger,
  tw`text-7xl`,
  hasCenter(center),
  hasMint(mint),
  bigger && tw`text-9xl text-mint`
])

H1.propTypes = {
  bigger: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.string.isRequired,
  mb: PropTypes.number,
  mt: PropTypes.number
}

export const H2 = styled.h2(({ center, mint }) => [
  reset,
  baseBigger,
  tw`text-5xl`,
  hasCenter(center),
  hasMint(mint)
])

H2.propTypes = {
  center: PropTypes.bool,
  mint: PropTypes.bool
}

export const H3 = styled.h3(({ center, mint }) => [
  reset,
  base,
  tw`text-4xl`,
  hasCenter(center),
  hasMint(mint)
])

H3.propTypes = {
  center: PropTypes.bool,
  mint: PropTypes.bool
}

export const H4 = styled.h4(({ center, mint }) => [
  reset,
  base,
  tw`text-2xl`,
  hasCenter(center),
  hasMint(mint)
])

H4.propTypes = {
  center: PropTypes.bool,
  mint: PropTypes.bool
}

export const Lead = styled.p(({ center, mint }) => [
  reset,
  base,
  tw`text-2xl font-normal!`,
  hasCenter(center),
  hasMint(mint)
])

Lead.propTypes = {
  center: PropTypes.bool,
  mint: PropTypes.bool
}
