import React from 'react'

const ListTask = ({task,onDelete}) => {

  const handleDelete = () => {
    onDelete(task.id); 
  };

  
  return (
    <>
      <div className='list-task'>
       {task.title}
        <button className='delete-btn' onClick={handleDelete}>Delete</button>
      </div>
    </>
  )
}

export default ListTask
