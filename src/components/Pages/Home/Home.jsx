import Input from '../../PrimaryComponents/Input/Input.jsx'
import Button from '../../PrimaryComponents/Button/Button.jsx'
import React, { useState } from 'react'
import './Home.css'

const Home = () => {

    const [todo, setTodo] = useState([]);
      const [newTodo, setNewTodo] = useState("");
      const [count, setCount] = useState(1);
    
    
      const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
          setCount(count + 1);
          setTodo([...todo, { id: count, task: newTodo }]);
          console.log("New Todo Added:", newTodo);
          setNewTodo("");
        }
      }
    
      const  handleDelete = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
      }
    
      const handleEdit = (id) => {
        const editedTask = prompt("Enter the updated task:");
        if (editedTask) {
          setTodo(todo.map((item) => item.id === id ? { ...item, task: editedTask } : item));
        }
      }


  return (
    <>
            <div id='main-container'>
        <h1>Todo List</h1>
        <div className='input-container'>
        <Input type='text' label='Task' placeholder={"Enter a task"} onChange={(e) => setNewTodo(e.target.value)} />
        <Button bgcolor={"white"} colorParams={"black"} action={handleAddTodo} text={"Add"}/>
        </div>

        <div className='todo-list'>
        <h1>List</h1>
          <ul>
            {todo.map((item) => 
                (<li  key={item.id}> 
                  <input id="checkboxx" type='checkbox'/>
                  {item.task} 
                  <Button colorParams={"#ffff"} bgcolor={"blue"} text={"Delete"} action={() => handleDelete(item?.id)}/>
                    <Button colorParams={"gray"} bgcolor={"white"} text={"Edit"} action={() => handleEdit(item?.id)}/>
            </li>))}
          </ul>

        </div>
      </div>
    </>
  )
}

export default Home