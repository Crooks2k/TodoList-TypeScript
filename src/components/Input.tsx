import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';

export interface Itask  {
    id: String,
    taskName: String,
    date: String,
    completed: Boolean
}

type FormDefault = React.FormEvent<HTMLFormElement>

export const Input = (): JSX.Element => {

    const [newTasks, setNewTasks] = useState("")
    const [tasksDate, setTasksDate] = useState("")
    const [Alltasks, setAllTasks] = useState<Itask[]>([])
    const dispatch = useDispatch();

    const numbers: String = '0123456789'
    const letters: String = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    function generateRandomId(n: number) {
        let result = '';
        for (let i = 0; i < n; i++) {
          const randomNum = Math.floor(Math.random() * numbers.length);
          const randomLetter = Math.floor(Math.random() * letters.length);
          result += numbers[randomNum] + letters[randomLetter];
        }
        return result;
    }


    const addTaskToRedux = (name: String, date: String) =>{
        const newTask = { id: generateRandomId(10), taskName: name, date: date, completed: false };
        const todo = [...Alltasks, newTask]
        setAllTasks(todo)
        dispatch(addTask(newTask))
        setNewTasks("")
        setTasksDate("")
    }

    const handleSumbit = (e: FormDefault) => {
        e.preventDefault()
        addTaskToRedux(newTasks, tasksDate)
    }

    return (
        <>
            <Form className="w-75 mx-auto mt-3" onSubmit={handleSumbit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tasks</Form.Label>
                    <Form.Control type="text" placeholder="Enter your task" value={newTasks} onChange={e => setNewTasks(e.target.value)}/>
                    <Form.Text className="text-muted">
                        Don´t remember to complete your tasks c: 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date to Complete</Form.Label>
                    <Form.Control type="date" placeholder="task date" value={tasksDate} onChange={e => setTasksDate(e.target.value)}/>
                </Form.Group>
                <Button variant="success" type="submit" disabled={newTasks.length == 0 ? true : false}>
                    Create Task
                </Button>
            </Form>
        </>
    )
}