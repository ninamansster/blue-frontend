import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackIcon } from './components/Backicon'
import { SearchCard } from './components/SearchCard'
import { RandomPage } from './RandomPage'
import { LogoutUser } from './components/Logout'
import { AddTaskForm } from './components/AddTaskForm'
import { Tasks } from './components/TaskList'

const URL = 'https://auth-ninadisa.herokuapp.com/secrets'
// const URL = 'http://localhost:8000/secrets'

export const MyPage = () => {
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Hämtar accessToken från localStorage i webbläsaren,
  // och skickar in den i headers.

  const handleSecret = () => {
    const accessToken = window.localStorage.getItem('accessToken')

    setErrorMessage('')
    fetch(URL, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Access denied')
        }
        return res.json()
      })
      .then((json) => {
        console.log(json)
        setMessage(json.message)
      })

      .catch((err) => {
        setErrorMessage(err.message)
      })
  }

  return (
    <div className="page">
      <Link className="back" to="/">
        <BackIcon /> Back
      </Link>
      <main className="myPageWrapper">
        <h1 className="myPageTitle">Welcome to your page</h1>
        <div className="myPage">
          <section className="mySection">
            <SearchCard />
            <RandomPage />
          </section>
          <section className="mySection">
            <AddTaskForm />
            <Tasks />
          </section>
          <section className="mySection">
            <button
              className="secret-button"
              type="submit"
              onClick={handleSecret}>
              Show me a secret saying
            </button>
            <article>
              <>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="deck">
                  <p className="frontText">{message}</p>
                </div>
              </>
            </article>
          </section>

        </div>
        <LogoutUser />
      </main>
    </div>
  )
}