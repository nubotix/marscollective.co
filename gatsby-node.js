const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              team
              author
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const items = result.data.allMarkdownRemark.edges

    items.forEach(edge => {
      const id = edge.node.id
      const author = edge.node.frontmatter.author
      // const previous =
      //   index === blogItems.length - 1 ? null : blogItems[index + 1].node
      // const next = index === 0 ? null : blogItems[index - 1].node
      if (_.get(edge, `node.frontmatter.templateKey`)) {
        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(
              edge.node.frontmatter.templateKey
            )}ItemTemplate.js`
          ),
          context: {
            id,
            author
            // previous,
            // next
          }
        })
      }
    })

    let team = []
    items.forEach(edge => {
      if (_.get(edge, `node.frontmatter.team`)) {
        team = team.concat(edge.node.frontmatter.team)
      }
    })

    team = _.uniq(team)

    team.forEach(author => {
      const authorPath = `/authors/${_.kebabCase(author)}/`

      createPage({
        path: authorPath,
        component: path.resolve(`src/templates/authorItemTemplate.js`),
        context: {
          author
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
