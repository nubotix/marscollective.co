import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { useIntl } from 'gatsby-plugin-intl'

const TeamItemTemplate = ({ data }) => {
  const intl = useIntl()
  const author = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={author.name} lang={intl.formatMessage({ id: 'lang' })} />
      <h1>{author.name}</h1>
      <p>{author.position.pt}</p>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        position {
          en
          es
          pt
        }
      }
    }
  }
`

export default TeamItemTemplate
