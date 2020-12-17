import React from 'react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { H3 } from './heading'

const Wrapper = tw.div`grid gap-4 justify-items-center`
const Icon = tw.div`bg-red-500 w-40 h-40`
const Text = tw.div``

const ServicesItem = ({ icon, text, title }) => (
  <Wrapper>
    <Icon />
    <Text>
      <H3 center mint>
        {title}
      </H3>
      <p>{text}</p>
    </Text>
  </Wrapper>
)

export default ServicesItem

ServicesItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
}
