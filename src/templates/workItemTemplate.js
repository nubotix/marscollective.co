import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import WorkItem from '../containers/WorkItem'
import Contact from '../containers/Contact'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const WorkItemTemplate = ({ data }) => {
  const { t } = useTranslation()
  const workItem = data.markdownRemark.frontmatter

  const title = {
    en: workItem.title,
    es: workItem.titleES,
    pt: workItem.titlePT
  }

  const description = {
    en: workItem.description,
    es: workItem.descriptionES,
    pt: workItem.descriptionPT
  }

  return (
    <Layout>
      <SEO
        title={workItem.title}
        description={workItem.description}
        lang={t('Lang')}
      />
      <WorkItem
        title={title[t('Lang')]}
        description={description[t('Lang')]}
        content={workItem.content}
        role={workItem.role}
        team={workItem.team}
        date={workItem.date}
      />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        titleES
        titlePT
        description
        descriptionES
        descriptionPT
        content {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        role
        team
        date
      }
    }
  }
`

export default WorkItemTemplate
