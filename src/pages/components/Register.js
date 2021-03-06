import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BackIcon } from './Backicon'

const URL = 'https://auth-ninadisa.herokuapp.com/users'
// const URL = 'http://localhost:8000/users'

export const NewUser = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not create user')
        }
        return res.json()
      })
      .then((json) => {
        console.log(json)
        setMessage(json.message)
        setName('')
        setEmail('')
        setPassword('')
      })

      .catch((err) => {
        console.log('error:', err)
        setErrorMessage(err.message)
      })
  }

  return (
    <div className="page">
      <div className="superWrapper">
        <Link className="back" to="/">
          <BackIcon /> Back
        </Link>
        <form onSubmit={handleSubmit}>
          <h2 className="superUser">Fill in your name, email and password to get a new card every day</h2>

          <input className="register" value={name} type="text" placeholder="My name > 4 characters" required onChange={(event) => setName(event.target.value)} />


          <input className="register" value={email} type="email" placeholder="Email" required onChange={(event) => setEmail(event.target.value)} />


          <input className="register" value={password} type="password" placeholder="Password > 4 characters" required onChange={(event) => setPassword(event.target.value)} />

          <button
            className="button"
            type="submit"
            disabled={!!(name.length < 4 || password.length < 4)}
            onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
        {errorMessage && <div><p>{errorMessage}</p></div>}
        {message && <div><p>{message}</p></div>}
      </div>
    </div>
  )
}