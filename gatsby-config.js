const fs = require('fs')
const yaml = require('js-yaml')
const metadata = yaml.safeLoad(
  fs.readFileSync('content/metadata/index.yaml', 'utf8')
)
const contentPath = 'content'
const favicon = metadata.favicon ? `content/metadata/${metadata.favicon}` : ''
const supportedLanguages = ['en', 'es', 'pt']

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
    'gatsby-plugin-scroll-reveal',
    {
      resolve: '@marscollective/gatsby-theme-core',
      options: { contentPath, favicon, metadata }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')(`${__dirname}/src/theme/tailwind.config.js`),
          require('autoprefixer'),
          require('postcss-nested')
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: metadata.siteUrl
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -60
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-transformer-remark-frontmatter',
            options: {
              whitelist: ['textEN', 'textES', 'textPT']
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1216,
              linkImagesToOriginal: false,
              showCaptions: true,
              backgroundColor: 'transparent',
              quality: 100,
              withWebp: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/content/locales`,
        languages: supportedLanguages,
        defaultLanguage: 'en',
        redirect: true,
        redirectComponent: `${__dirname}/src/components/redirect.js`
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': 'src/assets',
          '@collections': 'src/cms/collections',
          '@components': 'src/components',
          '@cmsUtils': 'src/cms/collections/utils',
          '@hooks': 'src/hooks',
          '@templates': 'src/cms/templates',
          '@theme': 'src/theme',
          '@seo': 'src/components/seo'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        htmlTitle: `${metadata.title}: CMS`,
        htmlFavicon: favicon,
        modulePath: `${__dirname}/src/cms`,
        manualInit: true,
        enableIdentityWidget: false
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes
            .filter(node => {
              const path = node.path
              if (path.includes('404')) {
                return false
              }
              if (path.includes('offline-plugin-app-shell-fallback')) {
                return false
              }
              return supportedLanguages.includes(path.split('/')[1])
            })
            .map(node => {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: 'weekly',
                priority: 0.7
              }
            })
      }
    },
    `gatsby-plugin-client-side-redirect`
  ]
}
