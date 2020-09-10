module.exports = {
  siteMetadata: {
    title: `Mars Collective`,
    description: `A collective of creative minds located in Brazil with an international mindset.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-minify-html`,
    `gatsby-plugin-scroll-reveal`,
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
        name: `Mars Collective`,
        short_name: `Mars`,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#00D1B7`,
        display: `fullscreen`,
        icon: `src/images/icon.png`
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
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `es`, `pt`],
        defaultLanguage: `en`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false
        }
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
    `gatsby-plugin-netlify-cms`
  ]
}
