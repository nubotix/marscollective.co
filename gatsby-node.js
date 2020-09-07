const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { key: { eq: "work" } } }
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

    const workItems = result.data.allMarkdownRemark.edges

    workItems.forEach((workItem, index) => {
      const previous =
        index === workItems.length - 1 ? null : workItems[index + 1].node
      const next = index === 0 ? null : workItems[index - 1].node

      createPage({
        path: workItem.node.fields.slug,
        component: path.resolve('src/templates/workItemTemplate.js'),
        context: {
          slug: workItem.node.fields.slug,
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
