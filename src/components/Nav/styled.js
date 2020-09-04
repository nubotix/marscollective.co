import styled from 'styled-components'

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  left: 32px;
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
  list-style: none;

  @media (max-width: 1200px) {
    flex-flow: column nowrap;
    background-color: #fffcf3;
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

export const ListItem = styled.li`
  align-self: center;
  text-transform: uppercase;
  margin-left: 30px;

  a {
    color: #707070;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`