import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BackIcon } from './components/Backicon'

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
    <div className="page">
      <Link className="back" to="/">
        <BackIcon /> Back
      </Link>
      <section>
        <h1>Pick a card</h1>
        <main className="fullFlippingPage">
          {cards.map((card) => (
            <article className="flipCard" key={card.cardID}>
              <div className="flipCardInner" key={card.cardID}>
                <div className="flipCardFront">
                  <div key={card.cardID}>
                    <h1> Blue Doing</h1>
                  </div>
                </div>
                <div className="flipCardBack">
                  <Link key={card.cardID} to={`/cards/${card.cardID}`}>
                    <div className="cardWrap">
                      {card.image
                        && <img
                          key={card.cardID}
                          src={card.image}
                          alt="cardfront"
                          aria-label="card-display" />}
                      {card.title
                        && <h1 className="cardWrapLink">{card.title}</h1>}
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </main>
      </section>
    </div>
  )
}