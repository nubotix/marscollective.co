const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  // temporary redirects
  // don't forget to remove gatsby-plugin-client-
  // side-redirect in the future
  createRedirect({
    fromPath: '/portfolio',
    toPath: '/#portfolio',
    isPermanent: true
  })
  createRedirect({
    fromPath: '/en/portfolio',
    toPath: '/en/#portfolio',
    isPermanent: true
  })
  createRedirect({
    fromPath: '/es/portfolio',
    toPath: '/es/#portfolio',
    isPermanent: true
  })
  createRedirect({
    fromPath: '/pt/portfolio',
    toPath: '/pt/#portfolio',
    isPermanent: true
  })
  createRedirect({
    fromPath: '/blog',
    toPath: '/#blog',
    isPermanent: true
  })
  createRedirect({
    fromPath: '/en/blog',
    toPath: '/en/#blog',
    isPermanent: true
  })
  createRedirect({
    fromPath: '/es/blog',
    toPath: '/es/#blog',
    isPermanent: true
  })
  createRedirect({
    fromPath: '/pt/blog',
    toPath: '/pt/#blog',
    isPermanent: true
  })

  return graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { key: { in: ["blog-item", "portfolio-item"] } }
        }
      ) {
        edges {
          node {
            frontmatter {
              author
              key
            }
            fields {
              slug
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
      const key = node.frontmatter.key
      const slug = node.fields.slug
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/${key}.js`),
        context: {
          author,
          slug
        }
      })
    })
  })
}
