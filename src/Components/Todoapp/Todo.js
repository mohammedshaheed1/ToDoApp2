import React, { useEffect, useState } from 'react'
import "./Todo.css";
import AddTask from './AddTask';
import ListTask from './ListTask';

const Todo = () => {
    const[tasks,setTasks]=useState([
     
    ]);
    const addTask=(title)=>{
      const id = Math.floor(Math.random() * 10000); 
        const newTask = { id, title };
        setTasks([...tasks, newTask]);

    }

    const handleDelete = (taskId) => {
      console.log(taskId)
      setTasks(tasks.filter(task => task.id !== taskId));
      
    };

    useEffect(()=>{
      document.title=`YOU HAVE ${tasks.length}`
    })

  return (
    <>
      <div className='todo-container'>
        <div className='header'>Todo App</div>
        <div className='add-task'>
            <AddTask addTask={addTask}/>
        </div>
        <div className='tasks'>
            {tasks.map((task)=>(
                 <ListTask  task={task} onDelete={handleDelete}/>
            ))}
          </div>
      </div>
    </>
  )
}

export default Todo
