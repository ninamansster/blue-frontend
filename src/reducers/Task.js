import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'task',
  initialState: {
    items: [
      { id: 1, text: 'I am a planet steward', complete: true }
    ]
  },

  reducers: {
    // reducer that Adds items (tasks)
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload })
    },
    // reducer for CLEAR ALL tasks. (return initialState)

    removeAllItems: (state, action) => {
      state.items = []
    },

    // reducer to remove 1 tasks.

    removeItems: (state, action) => {
      // find 'the task' or whatever item
      // remove it from the items array
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // reducer to check and uncheck (toggle) the tasks via a checkbox. 

    toggleComplete: (state, action) => {

      //find task
      const foundItem = state.items.find((item) => item.id === action.payload)

      //toggle the value of toggleComplete.
      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    },

  }

})