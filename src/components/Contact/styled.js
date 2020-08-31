import styled from 'styled-components'
import { Map } from '@styled-icons/boxicons-regular/Map'
import { Envelope } from '@styled-icons/boxicons-regular/Envelope'
import { Phone } from '@styled-icons/boxicons-regular/Phone'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 26.5rem;
  gap: 2rem;
  padding: 4rem;
  margin: 8rem 0;
  border-radius: 2rem;
  background: #353535;
`

export const TextWrapper = styled.div`
  align-self: center;
`

export const Title = styled.h2`
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
