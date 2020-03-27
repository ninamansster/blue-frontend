import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

// This is the spinner that is shown if the fetch takes some time.
// In the Redux inspector it is visible when you play the fetch.
// Available different spinner types: https://www.npmjs.com/package/react-loader-spinner

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return <>{isLoading && (<Loader type="Puff" color="blue" height={60} width={30} />)}</>
}