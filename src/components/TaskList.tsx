import React from 'react'
import { useSelector } from 'react-redux';
import { Itask } from './Input';
import "./TaskList.css"
import { useEffect, useState } from 'react';
import { TasksState } from '../store/tasksSlice';

const TaskList = (): JSX.Element => {
  
  const tasksFromRedux = useSelector((state: TasksState) => state.tasks) || [] // Obtener las tareas del store de Redux Toolkit
  const [hasTasks, setHasTasks] = useState(false)

  useEffect(() => {
    const hasTasks = tasksFromRedux.length > 0
    setHasTasks(hasTasks)
  }, [tasksFromRedux, hasTasks])

  return (
    <>
      <h1 className="mt-4 text-center">Lista de tareas: </h1>
      {
        hasTasks
        ? (
          tasksFromRedux.map((task: Itask) => {
              return (
                <div key={task.id} className={`d-flex text-center mx-auto ${task.completed ? "success" : ""}`}>
                  <p>{task.taskName}</p>
                  <p>{task.date}</p>
                </div>
              )
            })
        ):(
          <p className="text-center mt-4">Aún no agregas ninguna tarea c:</p>
        )
      }
    </>
  )
}

export default TaskList