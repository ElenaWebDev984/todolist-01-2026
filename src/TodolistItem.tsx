import {TaskType} from "./App.tsx";
import {Button} from "./Button.tsx";

export type TodolistItemType = {
    title: string
    tasks: TaskType[]
}



export const TodolistItem = ({title, tasks}: TodolistItemType) => {

    const tasksList = tasks.length === 0
        ? <li>Task list is empty</li>
        : <ul>
            {
                tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
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
                <Button title='+'/>
            </div>
            {tasksList}
            <div>
                <Button title='All'/>
                <Button title='Active'/>
                <Button title='Completed'/>
            </div>
        </div>
    );
};

