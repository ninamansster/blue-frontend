import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from './Todo'

export const Tasks = () => {
  const allTasks = useSelector((store) => store.tasks.items)

  return (
    <div className="ListBackground">
      {allTasks.map((item) => (
        <Todo key={item.id} item={item} />
      ))}

    </div>
  )
}

