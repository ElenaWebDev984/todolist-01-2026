import './App.css'
import {TaskType, TodolistItem} from "./TodolistItem.tsx";


export const App = () => {
    const todolistTitle = 'What to learn'


    let tasks: TaskType[] = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]


    const deleteTask = (taskId: TaskType['id']) => {
        tasks = tasks.filter(task => task.id !== taskId)
    }

    return (
        <div className="app">
            <TodolistItem title={todolistTitle}
                          tasks={tasks}
                          deleteTask={deleteTask}/>
        </div>
    )
}


