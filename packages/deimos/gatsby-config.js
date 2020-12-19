const fs = require(`fs`)
const path = require(`path`)
const yaml = require(`js-yaml`)

module.exports = () => {
  const metadata = yaml.safeLoad(
    fs.readFileSync(`content/metadata/index.yaml`, `utf8`)
  )
  const contentPath = `content`
  const favicon = metadata.favicon ? `content/${metadata.favicon}` : ``
  return {
    siteMetadata: {
      title: metadata.title,
      desc: metadata.desc,
      phone: metadata.phone,
      email: metadata.email,
      siteUrl: metadata.siteUrl,
      social: metadata.social
    },
    plugins: [
      `gatsby-plugin-emotion`,
      `gatsby-plugin-scroll-reveal`,
      {
        resolve: `@marscollective/gatsby-theme-core`,
        options: { contentPath, favicon, metadata }
      },
      {
        resolve: 'gatsby-plugin-anchor-links',
        options: {
          offset: -100
        }
      },
      {
        resolve: `gatsby-plugin-intl`,
        options: {
          path: path.resolve(`./content/locales`),
          languages: [`en`, `es`, `pt`],
          defaultLanguage: `en`,
          redirect: true,
          redirectComponent: `${__dirname}/src/components/redirect.js`
        }
      },
      {
        resolve: `gatsby-plugin-alias-imports`,
        options: {
          alias: {
            '@components': `${__dirname}/src/components`,
            '@hooks': `${__dirname}/src/hooks`,
            '@theme': `${__dirname}/src/theme`,
            '@seo': `${__dirname}/src/components/seo`
          }
        }
      }
    ]
  }
}
