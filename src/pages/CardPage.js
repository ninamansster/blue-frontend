import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { ReactComponent as Matthew } from './assets/matthew.jpg'

// import './flipp.css'

// const URL = 'http://localhost:8080/cards'

export const CardPage = () => {
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
    <div>
      <section>
        <h1>Pick a card</h1>
        <div className="fullPage">
          {cards.map((card) => (
            <Link key={card.cardID} to={`/carddetails/${card.cardID}`}>
              <article>
                <img src="/assets/matthew.jpg" alt="cardfront" aria-label="card-display" />
                <section className="frontInfo">
                  <h1>{card.title}</h1>
                </section>
              </article>
            </Link>
          ))}
        </div>
      </section>
      <footer>
        <p>Photo by Matthew McBrayer on Unsplash</p>
        <a className="madeby" href="mailto:ninamansster@gmail.com"> Final project by Nina Månsson at Technigo Frontend Bootcamp 2019.</a>
      </footer>
    </div>
  )
}
