import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCard } from 'reducers/cards'

export const SearchCard = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <>
        <button
          onClick={() => {
            const cardID = Math.floor(Math.random() * (30 - 1) + 1)
            dispatch(fetchCard(cardID))
          }}> Get a random card </button>
      </>
    </div>
  )
}