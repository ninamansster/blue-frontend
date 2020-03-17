import React from 'react'
import styled from 'styled-components/macro'

const MoreMenu = styled.div`
  display: flex;
  flex-direction: column;
`
const DotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Dot = styled.div`
  border-radius: 5px;
  background: #d5f5f4;
  margin: 3px;
  width: 7px;
  height: 7px;
`
const DotText = styled.div`
  color: #d5f5f4;
  font-size:12px;
  font-weight:500;
  margin: 1px;
`

export const More = () => {
  return (
    <>
      <MoreMenu>
        <DotWrapper>
          <Dot />
          <DotText>LOG IN</DotText>
        </DotWrapper>
        <DotWrapper>
          <Dot />
          <DotText>REGISTER</DotText>
        </DotWrapper>
      </MoreMenu>
    </>
  )
}