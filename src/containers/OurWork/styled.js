import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const Wrapper = styled(Tabs)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--gutter);
`

export const ItemsList = styled(TabList)`
  align-self: center;
  list-style: none;
  text-align: center;
`

export const Item = styled(Tab)`
  margin-bottom: 1rem;
  outline: none;
  cursor: pointer;
`

export const ImagesWrapper = styled(TabPanel)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--gutter);
`
