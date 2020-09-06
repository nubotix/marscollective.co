import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const StyledBurger = styled.div`
  width: 2rem;
  height: 1.7rem;
  position: fixed;
  top: var(--gutter);
  left: var(--gutter);
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#fff' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const List = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  list-style: none;

  @media (max-width: 1200px) {
    flex-flow: column nowrap;
    background-color: var(--background);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding: var(--margin);
    transition: transform 0.3s ease-in-out;
  }
`

export const ListItem = styled.li`
  align-self: center;
  margin: 0 var(--gutter) 0 0;

  :last-child {
    margin: 0;
  }

  @media (max-width: 1200px) {
    margin: 0;
  }
`

export const ItemLink = styled(AnchorLink)`
  color: var(--default);
  font-weight: 600;
  text-decoration: none;
  border: none;

  :hover {
    color: var(--highLight);
  }

  &.active {
    color: var(--highLight);
  }
`
