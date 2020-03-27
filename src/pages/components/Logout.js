import React from 'react'
import { useHistory } from 'react-router-dom'

export const LogoutUser = () => {
  // If this is active, the function runs without pressing the button
  // const accessToken = localStorage.removeItem('accessToken')
  const history = useHistory()

  const onLoggedOut = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('accessToken')
    history.push('/')
  }

  return (
    <div>
      <button
        className="button"
        type="submit"
        onClick={onLoggedOut}>
        LOG OUT
      </button>
    </div>
  )
}
