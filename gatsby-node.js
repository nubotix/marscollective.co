const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { key: { eq: "portfolio" } } }
        limit: 50
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const portfolioItems = result.data.allMarkdownRemark.edges

    portfolioItems.forEach((portfolioItem, index) => {
      const previous =
        index === portfolioItems.length - 1
          ? null
          : portfolioItems[index + 1].node
      const next = index === 0 ? null : portfolioItems[index - 1].node

      createPage({
        path: portfolioItem.node.fields.slug,
        component: path.resolve('src/templates/portfolioItem.js'),
        context: {
          slug: portfolioItem.node.fields.slug,
          previous,
          next
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
