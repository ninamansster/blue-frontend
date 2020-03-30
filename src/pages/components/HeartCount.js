import React from 'react'
import { useParams } from 'react-router-dom'

// http://localhost:8080/${cardID}/like

export const HeartCount = (props) => {
  // console.log('clicking', cards)
  // const { addLike } = props
  // const history = useHistory()
  const { cardID } = useParams()
  // The handleLikefuncion is suposed to post a like and then send run the function addLike.
  // The functions are called from the Detailspage
  // This does not work at them moment
  const handleLike = () => {
    fetch(`https://happybluecards.herokuapp.com/${cardID}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then(() => {
        props.addLike(cardID)
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
            <span className="like" role="img" aria-label="Heart">I will do this 💚</span>
          </button>
        </div>
      </div>
    </div>
  )
}