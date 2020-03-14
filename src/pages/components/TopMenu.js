import React from 'react'
import styled from 'styled-components/macro'
import { More } from './navigation/MoreMenu'
import { BurgerMenu } from './navigation/BurgerMenu'
import { Heart } from './navigation/HeartIcon'

const Bar = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #021660;
padding: 5px 10px;
margin-top: 0px;
height: 50px;
width: 100%;
`

const Left = styled.div`
display: flex;
flex-direction: row;

`
const Center = styled.div`
display: flex;
flex-direction: row;

`
const Right = styled.div`
display: flex;
flex-direction: row;
`

export const TopMenu = () => {
  return (
    <>
      <Bar>
        <Left>
          <BurgerMenu />
        </Left>
        <Center>
          Blue good
        </Center>
        <Right>
          <Heart />
          <More />
        </Right>
      </Bar>
    </>
  )
}