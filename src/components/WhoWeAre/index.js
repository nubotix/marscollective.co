import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const WhoWeAre = () => {
  const data = useStaticQuery(
    graphql`
      query {
        Anderson: file(relativePath: { eq: "Team/AndersonLima.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        Daniel: file(relativePath: { eq: "Team/DanielSoares.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        Etienne: file(relativePath: { eq: "Team/EtienneBom.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        Frank: file(relativePath: { eq: "Team/FrankCendeno.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <S.Wrapper>
      <h2>Who we are</h2>
      <S.Itens>
        <S.Item>
          <S.Image fixed={data.Anderson.childImageSharp.fixed} />
          <S.TextWrapper>
            <h3>Anderson Lima</h3>
            <h4>Social Strategist</h4>
          </S.TextWrapper>
        </S.Item>
        <S.Item>
          <S.Image fixed={data.Daniel.childImageSharp.fixed} />
          <S.TextWrapper>
            <h3>Daniel Soares</h3>
            <h4>Web Developer</h4>
          </S.TextWrapper>
        </S.Item>
        <S.Item>
          <S.Image fixed={data.Etienne.childImageSharp.fixed} />
          <S.TextWrapper>
            <h3>Etienne Bom</h3>
            <h4>Graphic Designer</h4>
          </S.TextWrapper>
        </S.Item>
        <S.Item>
          <S.Image fixed={data.Frank.childImageSharp.fixed} />
          <S.TextWrapper>
            <h3>Frank Cedeño</h3>
            <h4>UI Designer</h4>
          </S.TextWrapper>
        </S.Item>
      </S.Itens>
    </S.Wrapper>
  )
}

export default WhoWeAre