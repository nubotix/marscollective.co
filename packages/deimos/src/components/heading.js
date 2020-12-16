import React from 'react'

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

export const H2 = ({ center, children, mint, mb, mt }) => (
  <h2
    className={`${reset} ${baseBigger} mt-${mt} mb-${mb} ${isCenter(
      center
    )} ${isMint(mint)} text-5xl`}
  >
    {children}
  </h2>
)

export const H3 = ({ center, children, mint, mb, mt }) => (
  <h3
    className={`${reset} ${base} mt-${mt} mb-${mb} ${isCenter(center)} ${isMint(
      mint
    )} text-4xl`}
  >
    {children}
  </h3>
)

export const H4 = ({ center, children, mint, mb, mt }) => (
  <h4
    className={`${reset} ${base} mt-${mt} mb-${mb} ${isCenter(center)} ${isMint(
      mint
    )} text-2xl`}
  >
    {children}
  </h4>
)

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
