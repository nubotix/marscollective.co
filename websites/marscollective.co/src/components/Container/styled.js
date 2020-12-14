import styled from 'styled-components'

export const Container = styled.section`
  max-width: var(--maxWidth);
  margin: var(--margin) auto;
  padding: 0 var(--gutter);

  &:nth-child(1),
  &:last-child {
    margin: calc(var(--margin) / 2) auto;
  }
`

export const ContainerNM = styled(Container)`
  margin: 0 auto !important;
`
