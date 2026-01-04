import './App.css'
import {TaskType, TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";

export type FilterValues = 'all' | 'active' | 'completed'


export const App = () => {
    const todolistTitle = 'What to learn'

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValues>('all')

    const changeFilter = (filter: FilterValues) => {
        setFilter(filter)
    }

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone)
    }


    const deleteTask = (taskId: TaskType['id']) => {
        const filteredTasks = tasks.filter(task => task.id !== taskId)
        setTasks(filteredTasks)
    }


    return (
        <div className="app">
            <TodolistItem title={todolistTitle}
                          tasks={filteredTasks}
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}/>
        </div>
    )
}


