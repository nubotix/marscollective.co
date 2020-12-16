import React from 'react'
import PropTypes from 'prop-types'

const reset = `m-0 p-0`
const baseBigger = `font-black font-heading uppercase`
const base = `font-body font-semibold leading-6`

function isCenter(center) {
  return center && `text-center`
}

function isMint(mint) {
  return mint ? `text-mint` : `text-white`
}

export const H1 = ({ bigger, center, children, mb, mt }) => (
  <h1
    className={`${reset} ${baseBigger} mt-${mt} mb-${mb} ${isCenter(
      center
    )} text-7xl text-white`}
  >
    {bigger ? <span className="text-9xl text-mint">{children}</span> : children}
  </h1>
)

H1.propTypes = {
  bigger: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.element.isRequired,
  mb: PropTypes.number,
  mt: PropTypes.number
}

export const H2 = ({ center, children, mint, mb, mt }) => (
  <h2
    className={`${reset} ${baseBigger} mt-${mt} mb-${mb} ${isCenter(
      center
    )} ${isMint(mint)} text-5xl`}
  >
    {children}
  </h2>
)

H2.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.element.isRequired,
  mint: PropTypes.bool,
  mb: PropTypes.number,
  mt: PropTypes.number
}

export const H3 = ({ center, children, mint, mb, mt }) => (
  <h3
    className={`${reset} ${base} mt-${mt} mb-${mb} ${isCenter(center)} ${isMint(
      mint
    )} text-4xl`}
  >
    {children}
  </h3>
)

H3.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.element.isRequired,
  mint: PropTypes.bool,
  mb: PropTypes.number,
  mt: PropTypes.number
}

export const H4 = ({ center, children, mint, mb, mt }) => (
  <h4
    className={`${reset} ${base} mt-${mt} mb-${mb} ${isCenter(center)} ${isMint(
      mint
    )} text-2xl`}
  >
    {children}
  </h4>
)

H4.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.element.isRequired,
  mint: PropTypes.bool,
  mb: PropTypes.number,
  mt: PropTypes.number
}

export const Lead = ({ center, children, mint, mb, mt }) => (
  <p
    className={`${reset} ${base} mt-${mt} mb-${mb} ${isCenter(center)} ${isMint(
      mint
    )} text-2xl`}
    style={{ fontWeight: 400 }}
  >
    {children}
  </p>
)

Lead.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.element.isRequired,
  mint: PropTypes.bool,
  mb: PropTypes.number,
  mt: PropTypes.number
}
