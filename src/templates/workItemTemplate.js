import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import WorkItem from '../containers/WorkItem'
import Contact from '../containers/Contact'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const WorkItemTemplate = ({ data }) => {
  const { t } = useTranslation()
  const workItem = data.workItem.frontmatter

  const description = {
    en: workItem.descriptions.en,
    es: workItem.descriptions.es,
    pt: workItem.descriptions.pt
  }

  const dataLocale = {
    en: data.dateEN.frontmatter.date,
    es: data.dateES.frontmatter.date,
    pt: data.datePT.frontmatter.date
  }

  return (
    <Layout>
      <SEO
        title={workItem.title}
        description={description[t('Lang')]}
        lang={t('Lang')}
      />
      <WorkItem
        title={workItem.title}
        description={description[t('Lang')]}
        content={workItem.content}
        video={workItem.video}
        role={workItem.role}
        team={workItem.team}
        date={dataLocale[t('Lang')]}
      />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    workItem: markdownRemark(id: { eq: $id }) {
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
      }
    }
    dateEN: markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(locale: "en", formatString: "MMMM DD, YYYY")
      }
    }
    dateES: markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(locale: "es", formatString: "DD [de] MMMM [de] YYYY")
      }
    }
    datePT: markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(locale: "pt", formatString: "DD [de] MMMM [de] YYYY")
      }
    }
  }
`

export default WorkItemTemplate
