const fs = require('fs')
const yaml = require('js-yaml')

module.exports = () => {
  const metadata = yaml.safeLoad(
    fs.readFileSync('content/metadata.yaml', 'utf8')
  )
  const favicon = metadata.favicon ? `content/${metadata.favicon}` : ``
  return {
    siteMetadata: {
      title: metadata.title,
      desc: metadata.desc,
      phone: metadata.phone,
      email: metadata.email,
      // siteUrl: metadata.siteUrl,
      social: metadata.social
    },
    plugins: [
      {
        resolve: `@marscollective/gatsby-theme-core`,
        options: { favicon, metadata }
      }
    ]
  }
}
