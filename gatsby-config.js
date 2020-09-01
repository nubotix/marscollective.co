module.exports = {
  siteMetadata: {
    title: `Mars Collective`,
    description: `A collective of creative minds located in Brazil with an international mindset.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    }
  ]
}
