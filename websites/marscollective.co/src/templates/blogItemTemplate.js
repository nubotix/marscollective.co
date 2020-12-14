import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogItemHeader from '../components/BlogItemHeader'
import BlogItemBody from '../components/BlogItemBody'
import AuthorWrapper from '../components/AuthorWrapper'
import Contact from '../components/contact'
import { useIntl } from 'gatsby-plugin-intl'

const BlogItemTemplate = ({ data }) => {
  const intl = useIntl()
  const blogItem = data.blogItem.frontmatter
  const blogItemBody = data.blogItem.fields.frontmattermd
  const blogItemAuthor = data.authorInfo.frontmatter

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

  const bio = {
    en: blogItemAuthor.bio.en,
    es: blogItemAuthor.bio.es,
    pt: blogItemAuthor.bio.pt
  }

  return (
    <Layout>
      <SEO
        title={title[intl.formatMessage({ id: 'lang' })]}
        description={description[intl.formatMessage({ id: 'lang' })]}
        lang={intl.formatMessage({ id: 'lang' })}
      />

      <div className="container">
        <BlogItemHeader
          image={blogItem.image.childImageSharp.fluid}
          title={title[intl.formatMessage({ id: 'lang' })]}
          avatar={blogItemAuthor.image.childImageSharp.fluid}
          author={blogItem.author}
          date={dataLocale[intl.formatMessage({ id: 'lang' })]}
        />
        <BlogItemBody html={body[intl.formatMessage({ id: 'lang' })]} />
        <AuthorWrapper
          avatar={blogItemAuthor.image.childImageSharp.fluid}
          author={blogItem.author}
          bio={bio[intl.formatMessage({ id: 'lang' })]}
          socialLinks={blogItemAuthor.social}
        />
      </div>
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
            fluid(maxWidth: 160, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bio {
          en
          es
          pt
        }
        social {
          label
          url
        }
      }
    }
  }
`

export default BlogItemTemplate
