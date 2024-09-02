import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const todoList = [
    { title: "Task 1", description: "Description 1", completed: false },
    { title: "Task 2", description: "Description 2", completed: true },
];

  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todoList} />;
       </div>
    </>
  )
}

export default App
