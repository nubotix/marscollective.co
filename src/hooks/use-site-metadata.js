import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          desc {
            en
            es
            pt
          }
          description
          email
          phone
          siteUrl
          social {
            label
            url
          }
          title
        }
      }
    }
  `)
  return siteMetadata
}
