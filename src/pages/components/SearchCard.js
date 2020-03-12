import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCard } from 'reducers/userCard'
import styled from 'styled-components/macro'

// Button styling

const Button = styled.button`
  width: 200px;
  height: 300px;
  /* background-color: darkblue;
  text-align: center; */
  border-radius: 20px;
  /* font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 5px;
  padding: 3px; */
  background-image: (url "./assets/matthew.jpg"); 
`
export const SearchCard = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * (30 - 1) + 1)
          dispatch(fetchCard(randomNumber))
        }} />
    </>
  )
}