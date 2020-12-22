import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import PostsItem from '@components/posts-item'

const Posts = ({ id, postsData }) => {
  const intl = useIntl()
  return (
    <section className="container" id={id}>
      <h2 className="center mint" data-sal="slide-up">
        {intl.formatMessage({ id: 'blog.title' })}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {postsData.map(({ node }, i) => {
          const title = {
            en: node.frontmatter.titles.en,
            es: node.frontmatter.titles.es,
            pt: node.frontmatter.titles.pt
          }
          return (
            <PostsItem
              date={intl.formatDate(node.frontmatter.date, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              image={node.frontmatter.image}
              slug={node.fields.slug}
              title={title[intl.formatMessage({ id: 'lang' })]}
              key={i}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Posts

Posts.propTypes = {
  id: PropTypes.string.isRequired,
  postsData: PropTypes.array.isRequired
}
