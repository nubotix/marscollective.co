import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Article from '../containers/Article'
import Contact from '../containers/Contact'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const BlogItemTemplate = ({ data }) => {
  const { t } = useTranslation()
  const blogItem = data.blogItem.frontmatter
  const blogItemBody = data.blogItem.fields.frontmattermd

  const title = {
    en: blogItem.titles.en,
    es: blogItem.titles.es,
    pt: blogItem.titles.pt
  }

  const dataLocale = {
    en: data.dateEN.frontmatter.date,
    es: data.dateES.frontmatter.date,
    pt: data.datePT.frontmatter.date
  }

  const description = {
    en: blogItem.descriptions.en,
    es: blogItem.descriptions.es,
    pt: blogItem.descriptions.pt
  }

  const body = {
    en: blogItemBody.textEN.html,
    es: blogItemBody.textES.html,
    pt: blogItemBody.textPT.html
  }

  return (
    <Layout>
      <Article
        title={title[t('Lang')]}
        avatar={data.authorInfo.frontmatter.image.childImageSharp.fixed}
        author={blogItem.author}
        image={blogItem.image.childImageSharp.fluid}
        date={dataLocale[t('Lang')]}
        html={body[t('Lang')]}
      />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $author: String!) {
    blogItem: markdownRemark(id: { eq: $id }) {
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
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tags
        author
        textEN
      }
      fields {
        frontmattermd {
          textEN {
            html
          }
          textES {
            html
          }
          textPT {
            html
          }
        }
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
    authorInfo: markdownRemark(
      frontmatter: { name: { eq: $author }, key: { eq: "team" } }
    ) {
      frontmatter {
        image {
          childImageSharp {
            fixed(width: 64, height: 64, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default BlogItemTemplate
