import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

export const HeartCount = (props) => {
  // console.log('clicking', cards)
  const { addLike } = props
  const history = useHistory()
  const { cardID } = useParams()
  // The handleLikefuncion is suposed to post a like and then send run the function addLike.
  // The functions are called from the Detailspage
  const handleLike = () => {
    fetch(`http://localhost:8080/${cardID}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then(() => {
        props.addLike(addLike)
        history.push('/flippingcards')
      })
  }

  return (
    <div>
      <div className="heartTimer">
        <div className="likeThought">
          <button
            className="heartButton"
            type="submit"
            onClick={handleLike}>
            <span className="like" role="img" aria-label="Heart">💚</span>
          </button>
        </div>
      </div>
    </div>
  )
}