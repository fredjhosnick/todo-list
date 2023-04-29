import { useState } from 'react';
import './App.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Task from './Task';


function App() {

  const [todoList, setTodoList]= useState([])
  const [newTask,setNewTask]= useState("")

  const handleChange =(e)=>{
    setNewTask(e.target.value)
  }

  const addTask =()=>{

    const task = {
      id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id +1 ,
      taskName: newTask,
      completed:false,
    };
   setTodoList([...todoList,task]);
  };

  const deleteTask =(id)=>{
    setTodoList(todoList.filter((task)=>task.id !== id))
   }

   const completeTask =(id)=>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id === id){
          return{...task, completed:true}
        }else{
          return task
        }
      })
    )
   }
  return (
    <div className="App"><h1>Todo List</h1>
      <div className='addTask'>

        <input onChange={handleChange} value={newTask}/>

        <button onClick={addTask}><AddCircleIcon/></button>
        
      
      </div>
      <div className='list'></div>
      {todoList.map((task)=>{
        return( 
        <Task 
        taskName={task.taskName}
        id={task.id} 
        deleteTask={deleteTask}
        completeTask={completeTask}
        completed={task.completed}
        />)
      })}
    </div>
  );
}

export default App;
