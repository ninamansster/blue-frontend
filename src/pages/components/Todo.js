import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'

// for example add this:
// const {id, complete, text} = props.item

// and then in all the places that you now uses props.item.id for example, change to only use id

export const Todo = (props) => {
  const { id, complete, text } = props.item

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleComplete(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItems(id))
  }

  return (
    <div>
      <ul className="List">
        <label>
          <input className="TodoCheckbox"
            type="checkbox"
            arialabel="completed"
            checked={complete}
            onChange={handleCheckboxClick}>
          </input>
        </label>
        <p className="Todotext">{text}</p>
        <button className="TodoButton" type="button" arialabel="delete" onClick={handleRemoveButtonClick}><span role="img" arialabel="delete task">🗑</span></button>
      </ul>
    </div>
  )
}
