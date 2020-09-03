import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const Wrapper = styled.nav`
  display: flex;

  z-index: 5;
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 2000;
  display: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? 'var(--highLight)' : 'var(--default)'};
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
  list-style: none;

  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background: var(--background);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

export const Item = styled.li`
  margin: 0 2rem 0 0;
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
