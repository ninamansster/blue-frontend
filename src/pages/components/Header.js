import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line import/named
import { SearchCard } from './SearchCard'
import { RandomPage } from '../RandomPage'

export const Header = () => {
  return (

    <header>
      <div className="superWrapper">
        <h1 className="superHeader"> TIPS AND SMALL EFFORTS YOU CAN DO</h1>
      </div>
      <div className="superWrapper">
        <h2 className="superSteward">Flip a card to get inspiration to do something good </h2>
        <Link to="/flippingcards">
          <div className="deck">
            <h3 className="frontText">What can I do?</h3>
            <span className="Earth" role="img" aria-label="earth">🌍</span>
          </div>
        </Link>
      </div>
      <div className="superWrapper">
        <h2 className="superSteward">Get a random card </h2>
        <SearchCard />
        <RandomPage />
      </div>
      <div className="superWrapper">
        <h2 className="superSteward">Anyone can be a planet steward and take care of the planet</h2>
        <h2 className="superSteward">Blue doing supports actions for planet stewardship </h2>
        <Link to="/cards/27"><p>What is earth biosphere stewardship?</p></Link>
      </div>
      <footer>
        <a className="madeby" href="mailto:ninamansster@gmail.com"> Final project by Nina Månsson at Technigo Frontend Bootcamp 2019-2020.</a>
      </footer>
    </header>
  )
}