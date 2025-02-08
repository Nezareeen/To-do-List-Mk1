import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] = useState([
    {
      description:"Learn react",
      status:true
    }
  ])

  const[todoDescription,settodoDescription] = useState("");

  function handleInput(e){
    settodoDescription({
      description:e.target.value,
      status:false
    })
  }

  function createTodo(){
    const tempTodoList = [...todos];
    tempTodoList.unshift(todoDescription);
    setTodos(tempTodoList)
  }

  return (
    <>
      <div>
        <input type='text' onChange={handleInput} placeholder='List down tasks'/>
        <button onClick={createTodo}>Add Tasks</button>
      </div>
      <div>
        <h1>To-Do List</h1>
        {
          todos.map((ele)=>{
            return <div>
              <span>Description:{ele.description}{"\n"}</span>
              <span>Status:{ele.status?"Done":"Pending"}</span>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
