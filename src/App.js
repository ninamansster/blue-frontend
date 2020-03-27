import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'
import { userCard } from 'reducers/cards'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { FlippingCardPage } from './pages/FlippingCardPage'
import { DetailsPage } from './pages/DetailsPage'
import { Header } from './pages/components/Header'
import { TopMenu } from './pages/components/TopMenu'
import { NewUser } from './pages/components/Register'
import { LoginUser } from './pages/components/Login'
import { MyPage } from './pages/MyPage'

const reducer = combineReducers({
  ui: ui.reducer,
  cards: userCard.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <TopMenu />
        <Route path="/" exact>
          <Header />
        </Route>
        <Route path="/register" exact>
          <NewUser />
        </Route>
        <Route path="/login" exact>
          <LoginUser />
        </Route>
        <Route path="/flippingcards" exact>
          <FlippingCardPage />
        </Route>
        <Route path="/cards/:cardID" exact>
          <DetailsPage />
        </Route>
        <Route path="/mypage" exact>
          <MyPage />
        </Route>
      </Router>
    </Provider>
  )
}
