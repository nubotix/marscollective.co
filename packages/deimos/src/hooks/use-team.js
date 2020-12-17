import { graphql, useStaticQuery } from 'gatsby'

export default function useTeam() {
  const { teamYaml } = useStaticQuery(graphql`
    query {
      teamYaml {
        members {
          bio {
            en
            es
            pt
          }
          image {
            childImageSharp {
              fluid(maxWidth: 160, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          name
          position {
            en
            es
            pt
          }
          social {
            label
            url
          }
        }
        title {
          en
          es
          pt
        }
      }
    }
  `)
  return teamYaml
}
