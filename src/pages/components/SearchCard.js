import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCard } from 'reducers/userCard'
import styled from 'styled-components/macro'

//Button styling

const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: darkblue;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 5px;
  padding: 3px;
`
export const SearchCard = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        onClick={(cardID) => {
          dispatch(fetchCard(cardID))
        }} />
    </>
  )
}