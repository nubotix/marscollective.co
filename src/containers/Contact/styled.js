import styled from 'styled-components'
import { H2 } from '../../components/Typography'
import { Map } from '@styled-icons/boxicons-regular/Map'
import { Envelope } from '@styled-icons/boxicons-regular/Envelope'
import { Phone } from '@styled-icons/boxicons-regular/Phone'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 26.5rem;
  gap: var(--gutter);
  padding: calc(var(--gutter) * 2);
  border-radius: var(--doubleBorderRadius);
  background: var(--backgroundGray);

  @media (max-width: 960px) {
    padding: var(--gutter);
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 0;
    background: none;
  }
`

export const TextWrapper = styled.div`
  align-self: center;
`

export const Title = styled(H2)`
  text-align: left;
  color: var(--default);
`

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  gap: var(--halfGutter);
  margin-bottom: var(--halfGutter);

  a {
    color: var(--default);
    text-decoration: none;

    &:hover {
      color: var(--default);
    }
  }
`

export const InfoItem = styled.span``

export const MapIcon = styled(Map)`
  width: 24px;
  margin: -5px var(--halfGutter) 0 0;
`

export const EnvelopeIcon = styled(Envelope)`
  width: 24px;
  margin: -5px var(--halfGutter) 0 0;
`

export const PhoneIcon = styled(Phone)`
  width: 24px;
  margin: -5px var(--halfGutter) 0 0;
`
