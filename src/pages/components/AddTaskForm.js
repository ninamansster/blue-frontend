import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'

export const AddTaskForm = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  // event that do the submit

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(tasks.actions.addTask(text))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="label">
        <button
          className="button"
          type="submit"
          disabled={text.length < 1 || text.length > 40 ? true : false}>
          Add
        </button>
        <input
          className="todoInput"
          type="text"
          placeholder="My new planet steward task"
          value={text}
          onChange={(event) => setText(event.target.value)}>
        </input>
      </div>
    </form>
  )
}