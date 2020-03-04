import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// const URL = 'http://localhost:8080/cards'

export const CardPage = () => {
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
    <div>
      <h1>Pick a card</h1>

      <div className="fullPage">
        {cards.map(card => (
          <Link key={card.cardID} to={`/carddetails/${card.cardID}`}>
            <article>
              <section className="frontInfo">
                <img src="./assets/matthew-mcbrayer-s.jpg" alt="cardfront" aria-label="card-display" />

                <h1>{card.title}</h1>
              </section>
            </article>
          </Link>
        ))}

      </div>
      <footer>
        <p>Photo by Paweł Czerwiński on Unsplash, Photo by Matthew McBrayer on Unsplash</p>
        <a className="madeby" href="mailto:ninamansster@gmail.com"> Final project by Nina Månsson at Technigo Frontend Bootcamp 2019.</a>
      </footer>
    </div>
  )
}
