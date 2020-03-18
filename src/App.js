import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { FlippingCardPage } from './pages/FlippingCardPage'
import { DetailsPage } from './pages/DetailsPage'
import { Header } from './pages/components/Header'
import { TopMenu } from './pages/components/TopMenu'
import { NewUser } from './pages/components/Register'
import { LoginUser } from './pages/components/Login'


export const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <TopMenu />
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
      <Route path="/like" exact>
        My page
      </Route>
    </Router>
  )
}
