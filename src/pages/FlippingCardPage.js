import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './flipp.css'

// const URL = 'http://localhost:8080/cards'

export const FlippingCardPage = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(
      'http://localhost:8080/cards'
    )
      .then(res => res.json())
      .then(json => {
        setCards(json)
      })
  }, [])

  return (
    <section>
      <h1>Pick a card</h1>
      <article className="flipCard">
        <div className="flipCardInner">
          <div className="flipCardFront">
            <h1>Front</h1>
          </div>
          <div className="flipCardBack">
            {/* <img src="https://images.unsplash.com/photo-1507561152-ed3719ac59f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img> */}
            <h1>Back</h1>
          </div>
        </div>
      </article>
    </section>
  )
}