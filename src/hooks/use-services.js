import { graphql, useStaticQuery } from 'gatsby'

export default function useTeam() {
  const { servicesYaml } = useStaticQuery(graphql`
    query {
      servicesYaml {
        items {
          contents {
            en
            es
            pt
          }
          image {
            publicURL
          }
          titles {
            en
            es
            pt
          }
        }
        titles {
          en
          es
          pt
        }
      }
    }
  `)
  return servicesYaml
}
