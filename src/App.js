import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { FlippingCardPage } from './pages/FlippingCardPage'
import { DetailsPage } from './pages/DetailsPage'
import { Header } from './pages/components/Header'

export const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Header />
      </Route>
      <Route path="/flippingcards" exact>
        <FlippingCardPage />
        <section>
          <p>Card section</p>
        </section>
      </Route>
      <Route path="/cards/:cardID" exact>
        <DetailsPage />
      </Route>
    </Router>
  )
}
