import React from 'react'
import { Link } from 'react-router-dom'
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
  margin: 1px 5px;
`

export const More = () => {
  return (
    <>
      <MoreMenu>
        <Link to="/login">
          <DotWrapper>
            <Dot />
            <DotText>LOG IN</DotText>
          </DotWrapper>
        </Link>
        <Link to="/register">
          <DotWrapper>
            <Dot />
            <DotText>REGISTER</DotText>
          </DotWrapper>
        </Link>

      </MoreMenu>
    </>
  )
}