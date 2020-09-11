import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const TeamItemTemplate = ({ data }) => {
  const { t } = useTranslation()
  const author = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={author.name} lang={t('Lang')} />
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
