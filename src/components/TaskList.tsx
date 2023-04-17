import React from 'react'
import { useSelector } from 'react-redux';
import { Itask } from './Input';

interface TasksState {
  tasks: Itask[];
}

const TaskList = (): JSX.Element => {

  const tasks = useSelector((state: TasksState) => state.tasks)
  console.log(tasks)

  if (tasks.length === 0) {
    return (
    <div>No Task Here c:</div>
    )
  }

  return (
    <>
     
    </>
  )
}

export default TaskList