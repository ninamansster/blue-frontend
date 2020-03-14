import React from 'react'
import styled from 'styled-components/macro'

const MoreMenu = styled.div`
display: flex;
flex-direction: column;
`
const Dot = styled.div`
border-radius: 5px;
background: #1C5453;
margin: 3px;
width: 7px;
height: 7px;
`

export const More = () => {
  return (
    <>
      <MoreMenu>
        <Dot />
        <Dot />
        <Dot />
      </MoreMenu>
    </>
  )
}