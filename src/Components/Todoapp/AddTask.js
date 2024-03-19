import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  const [value,setValue]=useState("")

  const addItem=()=>{
     addTask(value)
  }
  return (
    <>
      <div className='input-container'>
        <input
         type='text'
         className='input'
         placeholder='Add a new task'
         value={value}
         onChange={(e)=>setValue(e.target.value)}
       
         />
        <button className='add-btn' onClick={addItem}>ADD</button>
      </div>
    </>
  )
}

export default AddTask
