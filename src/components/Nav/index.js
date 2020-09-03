import React, { useState } from 'react'

import * as S from './styled'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>

      <S.List open={open} onClick={() => setOpen(!open)}>
        <S.ListItem>Olá</S.ListItem>
        <S.ListItem>Olá</S.ListItem>
        <S.ListItem>Olá</S.ListItem>
        <S.ListItem>Olá</S.ListItem>
        <S.ListItem>Olá</S.ListItem>
        <S.ListItem>Olá</S.ListItem>
        <S.ListItem>Olá</S.ListItem>
        <S.ListItem>Olá</S.ListItem>
      </S.List>
    </nav>
  )
}

export default Nav
