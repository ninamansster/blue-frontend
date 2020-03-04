import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CardPage } from './pages/CardPage'
import { FlippingCardPage } from './pages/FlippingCardPage'


export const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <section>
          <h1>Small tips and efforts that will make you take care of the planet</h1>
          <div>
            <p>Pick a card to get inspo to do something for the planet</p>
          </div>
        </section>
      </Route>
      <Route path="/cards" exact>
        <CardPage />
        <section>
          <p>Card section</p>
        </section>
      </Route>
      <Route path="/flippingcards" exact>
        <FlippingCardPage />
        <section>
          <p>Card section</p>
        </section>
      </Route>

    </Router>
  )
}
