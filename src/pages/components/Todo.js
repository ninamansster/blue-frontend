import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'
import styled from 'styled-components/macro'

const List = styled.ul`
  color: darkblue;
  padding: 10px;
  padding-right:0px;
  font-size: 18px;
  font-family: 'Roboto' sans-serif;
  font-weight: 500;
  margin-top: 3px;
  margin-bottom:0px;
  display: flex;
  align-items: center;
  text-align: left;
`
const Todotext = styled.p`
  flex-grow: 1;
  margin: 5px;
`

const Checkbox = styled.input`
  height: 10px;
  width: 10px;
  
`
const Button = styled.button`
  width: 20px;
  height: 20px;
  text-align: center;
  line-height:13px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  margin-right: 10px;
  margin-bottom: 25px;
  padding: 1px 1px 1px 2px;
`

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
      <List>
        <label>
          <Checkbox
            type="checkbox"
            arialabel="completed"
            checked={complete}
            onChange={handleCheckboxClick} />
        </label>
        <Todotext>{text}</Todotext>
        <Button type="button" arialabel="delete" onClick={handleRemoveButtonClick}><span role="img" arialabel="delete task">🗑</span></Button>
      </List>
    </div>
  )
}
