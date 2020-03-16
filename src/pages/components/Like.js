import React, { useEffect, useState } from 'react'
import { HeartCount } from './HeartCount'

export const Like = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(
      'http://localhost:8080/cards'
    )
      .then((res) => res.json())
      .then((json) => {
        setCards(json)
      })
  }, [])

  const addLike = (likedId) => {
    const updatedCard = cards.map((card) => {
      if (card.cardID === likedId) {
        card.hearts += 1
      }
      return card
    })
    setCards(updatedCard)
  }

  return (
    <div>
      {cards.map((card) => (
        <HeartCount
          key={card.cardID}
          addLike={addLike} />
      ))}
    </div>
  )
}
