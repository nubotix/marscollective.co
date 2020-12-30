const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { key: { eq: "post-item" } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              author
              key
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const data = result.data.allMarkdownRemark.edges
    data.forEach(({ node }) => {
      const author = node.frontmatter.author
      const slug = node.fields.slug
      createPage({
        path: slug,
        component: path.resolve('./src/templates/post-item.js'),
        context: {
          author,
          slug
        }
      })
    })
  })
}
