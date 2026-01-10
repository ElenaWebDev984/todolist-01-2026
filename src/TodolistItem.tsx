import {Button} from "./Button.tsx";
import {FilterValues, Todolist} from "./App.tsx";
import {ChangeEvent, useState, KeyboardEvent} from "react";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistItemType = {
    todolist: Todolist
    tasks: TaskType[]
    deleteTask: (taskId: TaskType['id']) => void
    changeFilter: (todolistId: string, filter: FilterValues) => void
    createTask: (title: string) => void
    changeTaskStatus: (taskId: TaskType['id'], isDone: boolean) => void
}


export const TodolistItem = ({
                                 todolist: {id, title, filter},
                                 tasks,
                                 deleteTask,
                                 changeFilter,
                                 createTask,
                                 changeTaskStatus,
                             }: TodolistItemType) => {

    const [taskTitle, setTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const createTaskHandler = () => {
        const trimmedTitle = taskTitle.trim()
        if (taskTitle.trim() !== '') {
            createTask(trimmedTitle)
            setTaskTitle('')
        } else {
            setError('Title is required')
        }
    }

    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setError(null)
    }

    const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createTaskHandler()
        }
    }

    const changeFilterHandler = (filter: FilterValues) => {
        changeFilter(id, filter)
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
                        <li key={task.id}
                            className={task.isDone ? 'is-done' : ''}>

                            <input type="checkbox"
                                   checked={task.isDone}
                                   onChange={changeTaskStatusHandler}
                            />

                            <span>{task.title}</span>

                            <Button title='x'
                                    callback={deleteTaskHandler}
                            />
                        </li>
                    )
                })
            }
        </ul>


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input className={error ? 'error' : ''}
                       value={taskTitle}
                       onChange={changeTaskTitleHandler}
                       onKeyDown={createTaskOnEnterHandler}/>

                <Button title='+' callback={createTaskHandler}/>

                {error && <div className={'error-message'}>{error}</div>}
            </div>

            {tasksList}

            <div>
                <Button title='All'
                        callback={() => changeFilterHandler('all')}
                        className={filter === 'all' ? 'active-filter' : ''}
                />
                <Button title='Active'
                        callback={() => changeFilterHandler('active')}
                        className={filter === 'active' ? 'active-filter' : ''}
                />
                <Button title='Completed'
                        callback={() => changeFilterHandler('completed')}
                        className={filter === 'completed' ? 'active-filter' : ''}
                />
            </div>
        </div>
    );
};

