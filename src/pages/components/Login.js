import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { BackIcon } from './Backicon'

const URL = 'https://auth-ninadisa.herokuapp.com/sessions'
// const URL = 'http://localhost:8000/sessions'

export const LoginUser = () => {
  // useHistory this to route to "StartPage" when login succeeded.
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onLoggedIn = (event) => {
    event.preventDefault()

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('The user was not found or entered password is wrong')
        }
        return res.json()
      })

      .then(({ accessToken }) => {
        if (accessToken) {
          window.localStorage.setItem('accessToken', accessToken)
          history.push('/mypage')
        }
      })
      .catch((err) => {
        setErrorMessage(err.message)
      })
  }

  return (
    <div className="page">
      <div className="superWrapper">
        <Link className="back" to="/">
          <BackIcon /> Back
        </Link>
        <form onSubmit={onLoggedIn}>
          <h2 className="superUser">Login with email and password</h2>
          <label>
            <input className="log-in" value={email} type="email" placeholder="Email" required onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            <input className="log-in" value={password} type="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)} />
          </label>
          <button
            type="submit"
            disabled={password.length < 4}
            onClick={onLoggedIn}>
            LOG IN
          </button>
        </form>
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  )
}