import styled from 'styled-components'
import { H2 } from '../../components/Typography'
import { Map } from '@styled-icons/boxicons-regular/Map'
import { Envelope } from '@styled-icons/boxicons-regular/Envelope'
import { Phone } from '@styled-icons/boxicons-regular/Phone'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 26.5rem;
  gap: 2rem;
  padding: 4rem;
  border-radius: 2rem;
  background: var(--backgroundGray);

  @media (max-width: 960px) {
    padding: 2rem;
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
  display: flex;
  margin-bottom: 1rem;
  line-height: 1.5;

  a {
    color: var(--default);
    text-decoration: none;

    &:hover {
      color: var(--default);
    }
  }
`

export const MapIcon = styled(Map)`
  width: 24px;
  margin-right: 1rem;
`

export const EnvelopeIcon = styled(Envelope)`
  width: 24px;
  margin-right: 1rem;
`

export const PhoneIcon = styled(Phone)`
  width: 24px;
  margin-right: 1rem;
`
