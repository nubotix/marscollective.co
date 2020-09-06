import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const Wrapper = styled(Tabs)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--gutter);
`

export const ItemsWrapper = styled(TabList)`
  align-self: center;
  list-style: none;
  text-align: center;
`

export const ItemsListWrapper = styled.div`
  display: grid;
  gap: var(--doubleGutter);
`

export const ItemsList = styled.div`
  display: grid;
  gap: var(--gutter);
`

export const Item = styled(Tab)`
  font-weight: 600;
  outline: none;
  transition: 0.5s;
  cursor: pointer;

  :hover,
  &.react-tabs__tab--selected {
    color: var(--highLight);
  }
`

export const ImagesWrapper = styled(TabPanel)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--gutter);
`
