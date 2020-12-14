const siteMetadata = require('./siteMetadata.json')

const settings = {
  title: siteMetadata.title,
  shortTitle: siteMetadata.shortTitle,
  description: siteMetadata.description,
  descES: siteMetadata.descES,
  descPT: siteMetadata.descPT,
  siteUrl: siteMetadata.siteUrl,
  supportedLanguages: siteMetadata.supportedLanguages
}

module.exports = settings
