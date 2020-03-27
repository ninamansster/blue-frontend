import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackIcon } from './components/Backicon'
import { SearchCard } from './components/SearchCard'
import { RandomPage } from './RandomPage'
import { LogoutUser } from './components/Logout'


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
      <div className="myPage">
        <div>
          <SearchCard />
          <RandomPage />
        </div>


        <button
          className="secret-button"
          type="submit"
          onClick={handleSecret}>
          Give me a bonus card
          </button>
        <article>
          <>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <div className="deck">
              <p className="frontText">{message}</p>
            </div>

          </>
        </article>
        <LogoutUser />
      </div>

    </div>


  )
}