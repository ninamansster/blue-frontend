import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './flipp.css'

// const URL = 'http://localhost:8080/cards'

export const FlippingCardPage = () => {
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

  return (

    <section>
      <h1>Pick a card</h1>
      <div className="fullPage">
        {cards.map((card) => (
          <article className="flipCard" key={card.cardID}>
            <div className="flipCardInner" key={card.cardID}>
              <div className="flipCardFront">
                <div key={card.cardID}>
                  <h1> Bring it on</h1>
                </div>
              </div>
              <div className="flipCardBack">
                <Link key={card.cardID} to={`/carddetails/${card.cardID}`}>
                  <img
                    key={card.cardID}
                    src={card.image}
                    alt="cardfront"
                    aria-label="card-display"
                    style={{ height: 300 }} />
                  <h1>{card.title}</h1>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}