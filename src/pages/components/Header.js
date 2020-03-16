import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (

    <header>
      <h1 className="superHeader"> Tips and small efforts for blue planet doing</h1>
      <h2 className="superSteward"> Anyone can be a planet steward and take care of the planet</h2>
      <h2 className="superSteward">Flip a card to get inspiration to do something good </h2>
      <div className="superWrapper">
        <Link to="/flippingcards">
          <div className="deck">
            <span className="Earth" role="img" aria-label="earth">🌍</span>
          </div>
        </Link>
      </div>
      <h2 className="superSteward">  Blue doing supports actions for planet stewardship </h2>
      <Link to="/cards/27"><p>What is earth biosphere stewardship?</p></Link>
    </header>
  )
}