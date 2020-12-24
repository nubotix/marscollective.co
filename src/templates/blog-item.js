import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import SEO from '@seo'
import BlogItem from '@components/blog-item'

const BlogItemTemplate = ({ data }) => {
  const intl = useIntl()
  const { blogItem, author } = data
  const bodyData = blogItem.fields.frontmattermd

  const title = {
    en: blogItem.frontmatter.titles.en,
    es: blogItem.frontmatter.titles.es,
    pt: blogItem.frontmatter.titles.pt
  }

  const description = {
    en: blogItem.frontmatter.descriptions.en,
    es: blogItem.frontmatter.descriptions.es,
    pt: blogItem.frontmatter.descriptions.pt
  }

  const body = {
    en: bodyData.textEN.html,
    es: bodyData.textES.html,
    pt: bodyData.textPT.html
  }

  const authorBio = {
    en: author.frontmatter.bio.en,
    es: author.frontmatter.bio.es,
    pt: author.frontmatter.bio.pt
  }

  const html = (
    <div
      dangerouslySetInnerHTML={{
        __html: body[intl.formatMessage({ id: 'lang' })]
      }}
    />
  )

  return (
    <Layout>
      <SEO
        title={title[intl.formatMessage({ id: 'lang' })]}
        description={description[intl.formatMessage({ id: 'lang' })]}
        lang={intl.formatMessage({ id: 'lang' })}
      />
      <BlogItem
        authorBio={authorBio[intl.formatMessage({ id: 'lang' })]}
        authorName={author.frontmatter.name}
        authorImage={author.frontmatter.image}
        authorSocial={author.frontmatter.social}
        date={intl.formatDate(blogItem.frontmatter.date, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
        html={html}
        image={blogItem.frontmatter.image}
        title={title[intl.formatMessage({ id: 'lang' })]}
      />
    </Layout>
  )
}

export const query = graphql`
  query($author: String!, $slug: String!) {
    blogItem: markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { key: { eq: "blog-item" } }
    ) {
      frontmatter {
        date
        descriptions {
          en
          es
          pt
        }
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        titles {
          en
          es
          pt
        }
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
    author: markdownRemark(
      frontmatter: { name: { eq: $author }, key: { eq: "team-member" } }
    ) {
      frontmatter {
        bio {
          en
          es
          pt
        }
        image {
          childImageSharp {
            fluid(maxWidth: 160, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        name
        social {
          label
          url
        }
      }
    }
  }
`

export default BlogItemTemplate
