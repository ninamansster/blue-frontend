import React from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

export const HeartCount = (cards) => {
  console.log('clicking', cards)
  const { cardID } = useParams()
  const handleLike = () => {
    fetch(`http://localhost:8080/${cardID}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => cards.cardID.addLike(cardID))
  }

  return (
    <div>
      <div className="heartTimer">
        <div className="likeThought">
          <button
            className="heartButton"
            type="submit"
            onClick={handleLike}
            style={{ background: cards.hearts > 0 ? '#ffadad' : '#f3f1f1' }}>
            <span className="like" role="img" aria-label="Heart">💚</span>
          </button>
          <span> x {cards.hearts}</span>
        </div>
        <p>{moment(cards.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}