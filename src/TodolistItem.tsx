
import {Button} from "./Button.tsx";
import {FilterValues} from "./App.tsx";

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
    createTask: () => void
}



export const TodolistItem = ({title, tasks, deleteTask, changeFilter, createTask}: TodolistItemType) => {

    const tasksList = tasks.length === 0
        ? <li>Task list is empty</li>
        : <ul>
            {
                tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <Button title='x' callback={() => deleteTask(task.id)}/>
                        </li>
                    )
                })
            }
        </ul>



    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+' callback={() => {createTask()}}/>
            </div>
            {tasksList}
            <div>
                <Button title='All' callback={() => {changeFilter('all')}}/>
                <Button title='Active' callback={() => {changeFilter('active')}}/>
                <Button title='Completed' callback={() => {changeFilter('completed')}}/>
            </div>
        </div>
    );
};

