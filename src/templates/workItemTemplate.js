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
    en: workItem.titles.en,
    es: workItem.titles.es,
    pt: workItem.titles.pt
  }

  const description = {
    en: workItem.descriptions.en,
    es: workItem.descriptions.es,
    pt: workItem.descriptions.pt
  }

  return (
    <Layout>
      <SEO
        title={title[t('Lang')]}
        description={description[t('Lang')]}
        lang={t('Lang')}
      />
      <WorkItem
        title={title[t('Lang')]}
        description={description[t('Lang')]}
        content={workItem.content}
        video={workItem.video}
        role={workItem.role}
        team={workItem.team}
        date={workItem.date}
      />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        titles {
          en
          es
          pt
        }
        descriptions {
          en
          es
          pt
        }
        content {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        video
        role
        team
        date
      }
    }
  }
`

export default WorkItemTemplate
