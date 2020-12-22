import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from '@components/layout'
import SEO from '@seo'
import PostItem from '@components/post-item'

const PostItemTemplate = ({ data }) => {
  const intl = useIntl()
  const { postItem, author } = data
  const bodyData = postItem.fields.frontmattermd

  const title = {
    en: postItem.frontmatter.titles.en,
    es: postItem.frontmatter.titles.es,
    pt: postItem.frontmatter.titles.pt
  }

  const description = {
    en: postItem.frontmatter.descriptions.en,
    es: postItem.frontmatter.descriptions.es,
    pt: postItem.frontmatter.descriptions.pt
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
      <section className="container">
        <PostItem
          authorBio={authorBio[intl.formatMessage({ id: 'lang' })]}
          authorName={author.frontmatter.name}
          authorImage={author.frontmatter.image}
          authorSocial={author.frontmatter.social}
          date={intl.formatDate(postItem.frontmatter.date, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
          html={html}
          image={postItem.frontmatter.image.childImageSharp.fluid}
          title={title[intl.formatMessage({ id: 'lang' })]}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($author: String!, $slug: String!) {
    postItem: markdownRemark(fields: { slug: { eq: $slug } }) {
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

export default PostItemTemplate
