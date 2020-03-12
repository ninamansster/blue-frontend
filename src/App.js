import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { userCard } from 'reducers/userCard'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { CardPage } from './pages/CardPage'
import { FlippingCardPage } from './pages/FlippingCardPage'
import { DetailsPage } from './pages/DetailsPage'
import { SearchCard } from './pages/components/SearchCard'

const reducer = combineReducers({
  ui: ui.reducer,
  products: userCard.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route path="/" exact>
            <section>
              <h1> Small tips and efforts for blue planet doing</h1>
              <div>
                <p>Pick a card from the deck to get inspo to do something for the planet</p>
                <Link to="/cards/:cardID">
                  <SearchCard />
                </Link>
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
          <Route path="/cards/:cardID" exact>
            <DetailsPage />
          </Route>
        </Router>
      </div>
      <footer>
        <p>Cloud photo from Unsplash</p>
        <a className="madeby" href="mailto:ninamansster@gmail.com"> Final project by Nina Månsson at Technigo Frontend Bootcamp 2019.</a>
      </footer>
    </Provider>
  )
}
