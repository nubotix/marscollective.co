import { graphql, useStaticQuery } from 'gatsby'

export default function useTeam() {
  const { servicesYaml } = useStaticQuery(graphql`
    query {
      servicesYaml {
        items {
          content {
            en
            es
            pt
          }
          image {
            publicURL
          }
          title {
            en
            es
            pt
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
  return servicesYaml
}
