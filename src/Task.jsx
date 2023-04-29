import React from 'react'

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const Task = ({id, taskName, deleteTask, completeTask,completed}) => {
    
  return (
    <div className='task' style={{backgroundColor: completed ? 'green' : 'white'}}>
      <h1>{taskName}</h1>
          <button onClick={()=> deleteTask(id)}><RemoveCircleOutlineIcon/></button>
          <button onClick={()=>completeTask(id)}><DoneOutlineIcon/></button>

    </div>
  )
}

export default Task