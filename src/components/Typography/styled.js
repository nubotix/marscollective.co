import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: var(--titleFont);
  font-size: 5rem;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--default);

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }
`

export const Big = styled.span`
  display: block;
  font-size: 8.75rem;
  color: var(--highLight);

  @media (max-width: 1200px) {
    font-size: 7rem;
  }
`

export const H2 = styled.h2`
  font-size: 3rem;
  font-family: var(--titleFont);
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.1;
  color: var(--highLight);
  margin-bottom: var(--doubleGutter);

  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
`

export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.1;
  color: var(--highLight);
  margin-bottom: calc(var(--halfGutter) / 2);
`

export const H4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.1;
  margin-bottom: calc(var(--halfGutter) / 2);

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`

export const H5 = styled.h5`
  font-weight: 600;
  text-align: center;
  line-height: 1.1;
  margin-bottom: calc(var(--halfGutter) / 2);
`

export const H6 = styled.h6`
  font-weight: 600;
  text-align: center;
  line-height: 1.1;
  margin-bottom: calc(var(--halfGutter) / 2);
`

export const P = styled.p`
  line-height: 1.5;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Lead = styled(P)`
  font-size: 1.5rem;
  margin: -1rem 0 0 0;
`
