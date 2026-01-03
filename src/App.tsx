import './App.css'
import {TaskType, TodolistItem} from "./TodolistItem.tsx";

const tasks1: TaskType[] = [
    {id: 1, title: 'HTML', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React', isDone: false},
]

const tasks2: TaskType[] = [
    {id: 1, title: 'Milk', isDone: true},
    {id: 2, title: 'Apple', isDone: true},
    {id: 3, title: 'Orange', isDone: false},
]

export const App = () => {
  return (
      <div className="app">
          <TodolistItem title='What to learn'
          tasks={tasks1}/>
          <TodolistItem title='What to buy'
          tasks={tasks2}/>
      </div>
  )
}


