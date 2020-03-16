import React from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

export const HeartCount = (card) => {
  const { cardID } = useParams()
  const handleLike = () => {
    fetch(`http://localhost:8080/${cardID}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => card.cardID.addLike())
  }

  return (
    <div>
      <div className="heartTimer">
        <div className="likeThought">
          <button
            className="heartButton"
            type="submit"
            onClick={handleLike}
            style={{ background: card.hearts > 0 ? '#ffadad' : '#f3f1f1' }}>
            <span className="like" role="img" aria-label="Heart">💚</span>
          </button>
          <span> x {card.hearts}</span>
        </div>
        <p>{moment(card.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}