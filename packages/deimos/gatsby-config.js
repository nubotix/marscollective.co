const fs = require(`fs`)
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
      {
        resolve: `@marscollective/gatsby-theme-core`,
        options: { contentPath, favicon, metadata }
      },
      {
        resolve: `gatsby-plugin-intl`,
        options: {
          path: `${__dirname}/src/locales`,
          languages: [`en`, `es`, `pt`],
          defaultLanguage: `en`,
          redirect: true
        }
      },
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-alias-imports`,
        options: {
          alias: {
            '@components': `${__dirname}/src/components`
          }
        }
      }
    ]
  }
}
