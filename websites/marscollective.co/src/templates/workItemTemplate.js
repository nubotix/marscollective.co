import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import WorkItem from '../containers/WorkItem'
import Contact from '../components/contact'
import { useIntl } from 'gatsby-plugin-intl'

const WorkItemTemplate = ({ data }) => {
  const intl = useIntl()
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
        description={description[intl.formatMessage({ id: 'lang' })]}
        lang={intl.formatMessage({ id: 'lang' })}
      />
      <WorkItem
        title={workItem.title}
        description={description[intl.formatMessage({ id: 'lang' })]}
        content={workItem.content}
        video={workItem.video}
        role={workItem.role}
        team={workItem.team}
        date={dataLocale[intl.formatMessage({ id: 'lang' })]}
      />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    workItem: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
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
