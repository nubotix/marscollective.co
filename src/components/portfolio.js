import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import Card from '@components/card'

const Portfolio = ({ id, portfolioData }) => {
  const intl = useIntl().formatMessage
  return (
    <section className="container" id={id}>
      <h2 className="center mint" data-sal="fade">
        {intl({ id: 'portfolio.title' })}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.map(({ node }, i) => (
          <Card
            image={node.frontmatter.image}
            slug={node.fields.slug}
            title={node.frontmatter.title}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio

Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
  portfolioData: PropTypes.array.isRequired
}
