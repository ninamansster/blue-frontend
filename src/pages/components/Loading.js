import React from 'react'
import styled from 'styled-components/macro'

const rotate = styled.keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
  `
const Rotate = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
`

export const Loading = () => {
  return (
    <Rotate>
      <span>&lt; mmmmm &gt;</span>
    </Rotate>
  )
}