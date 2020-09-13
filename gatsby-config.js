const settings = require('./content/settings')

module.exports = {
  siteMetadata: {
    title: settings.title,
    description: {
      en: settings.description.en,
      es: settings.description.es,
      pt: settings.description.pt
    },
    siteUrl: settings.siteUrl
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-minify-html`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-sitemap`,
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
              return settings.supportedLanguages.includes(path.split('/')[1])
            })
            .map(node => {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `weekly`,
                priority: 0.7
              }
            })
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: settings.siteUrl
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/logo.svg`
        }
      }
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -128
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-transformer-remark-frontmatter`,
            options: {
              whitelist: [`textEN`, `textES`, `textPT`]
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 100,
              withWebp: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: settings.title,
        short_name: settings.shortTitle,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#00D1B7`,
        display: `fullscreen`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `maskable`
        }
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Rubik`,
              variants: [`900`]
            },
            {
              family: `Baloo 2`,
              variants: [`400`, `600`]
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: settings.supportedLanguages,
        defaultLanguage: `en`,
        redirect: true
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-TG7DCN7`,
        includeInDevelopment: true,
        defaultDataLayer: { platform: `gatsby` }
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `Painel Administrativo`,
        htmlFavicon: `src/images/icon.png`
      }
    }
  ]
}
