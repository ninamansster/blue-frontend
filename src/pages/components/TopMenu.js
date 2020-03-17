import React from 'react'
import styled from 'styled-components/macro'
import { More } from './navigation/MoreMenu'
import { BurgerMenu } from './navigation/BurgerMenu'

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
const CenterText = styled.p`
  font-family: 'Manjari', sans-serif;
  font-weight:bold;
  font-size: 16px;
  color:#d5f5f4;
`

export const TopMenu = () => {
  return (
    <>
      <Bar>
        <Left>
          <BurgerMenu />
        </Left>
        <Center>
          <CenterText>BLUE DOING</CenterText>
        </Center>
        <Right>
          <More />
        </Right>
      </Bar>
    </>
  )
}