const fs = require(`fs`)
const yaml = require(`js-yaml`)
const metadata = yaml.safeLoad(
  fs.readFileSync(`content/metadata/index.yaml`, `utf8`)
)
const contentPath = `content`
const favicon = metadata.favicon ? `content/metadata/${metadata.favicon}` : ``

module.exports = {
  siteMetadata: {
    title: metadata.title,
    descriptions: metadata.descriptions,
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
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: metadata.siteUrl
      }
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
        path: `${__dirname}/content/locales`,
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
          '@collections': `src/cms/collections`,
          '@components': `src/components`,
          '@cmsUtils': `src/cms/collections/utils`,
          '@hooks': `src/hooks`,
          '@theme': `src/theme`,
          '@seo': `src/components/seo`
        }
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `${metadata.title}: CMS`,
        htmlFavicon: favicon,
        modulePath: `${__dirname}/src/cms`,
        manualInit: true
      }
    }
  ]
}
