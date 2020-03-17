import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
`
const Dash = styled.div`
  border-radius: 2px;
  background: #d5f5f4;
  margin: 4px;
  width: 20px;
  height: 3px;
`

export const BurgerMenu = () => {
  return (
    <SideMenu>
      <Link to="/flippingcards">
        <Dash />
        <Dash />
        <Dash />
      </Link>
    </SideMenu>
  )
}