import {Button} from "./Button.tsx";
import {FilterValues} from "./App.tsx";
import {ChangeEvent, useState, KeyboardEvent} from "react";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistItemType = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: TaskType['id']) => void
    changeFilter: (filter: FilterValues) => void
    createTask: (title: string) => void
    changeTaskStatus: (taskId: TaskType['id'], isDone: boolean) => void
}


export const TodolistItem = ({title, tasks, deleteTask, changeFilter, createTask, changeTaskStatus}: TodolistItemType) => {

    const [taskTitle, setTaskTitle] = useState('')

    const createTaskHandler = () => {
        if (taskTitle.trim() !== '') {
            createTask(taskTitle)
            setTaskTitle('')
        }
    }

    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createTaskHandler()
        }
    }




    const tasksList = tasks.length === 0
        ? <li>Task list is empty</li>
        : <ul>
            {
                tasks.map(task => {
                    const deleteTaskHandler = () => deleteTask(task.id)

                    const changeTaskStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
                        const newStatusValue = event.currentTarget.checked
                        changeTaskStatus(task.id, newStatusValue)
                    }

                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler}/>
                            <span>{task.title}</span>
                            <Button title='x' callback={deleteTaskHandler}/>
                        </li>
                    )
                })
            }
        </ul>


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle}
                       onChange={changeTaskTitleHandler}
                       onKeyDown={createTaskOnEnterHandler}/>

                <Button title='+' callback={createTaskHandler}/>
            </div>

            {tasksList}

            <div>
                <Button title='All' callback={() => {
                    changeFilter('all')
                }}/>
                <Button title='Active' callback={() => {
                    changeFilter('active')
                }}/>
                <Button title='Completed' callback={() => {
                    changeFilter('completed')
                }}/>
            </div>
        </div>
    );
};

