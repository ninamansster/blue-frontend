import { createSlice } from '@reduxjs/toolkit'
import { ui } from 'reducers/ui'



export const userCard = createSlice({
  name: 'userCard',
  initialState: {
    userCard: []
  },

  reducers: {
    setuserCard: (state, action) => {
      state.userCard = action.payload
    }
  }
})

export const fetchCard = (cardID) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`http://localhost:8080/cards/${cardID}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(userCard.actions.setuserCard(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

//8722700001232 this Tea-code you can put directly in the fetch instead of ${barcode}, to test that the bardoce fetch is working.