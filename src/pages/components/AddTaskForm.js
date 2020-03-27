/* eslint-disable react/void-dom-elements-no-children */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'
import styled from 'styled-components/macro'

const Input = styled.input`
  width: 280px;
  height: 30px;
  background-color: white;
  text-align: left;
  border-radius: 5px;
  font-size: 16px;
  color: darkblue;
  margin-top: 10px;
  padding: 5px;
`

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
    <form className="todoForm" onSubmit={handleSubmit}>
      <div className="label">
        <button
          className="button"
          type="submit"
          disabled={!!(text.length < 1 || text.length > 40)}>
          Add
        </button>
        <Input
          type="text"
          placeholder="Add new planet steward task"
          value={text}
          onChange={(event) => setText(event.target.value)} />
      </div>
    </form>
  )
}