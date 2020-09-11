const siteMetadata = require('./siteMetadata.json')

const settings = {
  title: siteMetadata.title,
  shortTitle: siteMetadata.shortTitle,
  description: {
    en: siteMetadata.description.en,
    es: siteMetadata.description.es,
    pt: siteMetadata.description.pt
  }
}

module.exports = settings
