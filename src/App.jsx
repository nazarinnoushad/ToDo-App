import { useState } from 'react'
import Todo from './components/Todo';
function App() {
  const [todoList, settodoList] = useState([
    {id :1 , taskName : "Sleep", iscomplete : false},
    {id :2 , taskName : "Go to Gym", iscomplete : false},
    {id :3 , taskName : "Eat Breakfast", iscomplete : false},
    {id :4 , taskName : "Study", iscomplete : false}
     ]); 
     const [newTask, setnewTask] = useState("");

     // Add Task

 const addTask =(e)=>{ 
  e.preventDefault()
 if (!newTask) {
  alert("Enter the Task")
 }
 else{
  let num = todoList.length +1
  let newEntry = {id:num,taskName:newTask,iscomplete:false}
  settodoList([...todoList,newEntry])
  setnewTask("") 
 } 
}
// Delete Task

const deleteTask = (id) => {
  settodoList(
    todoList.filter((item) => {
    return item.id !==id
  }))
}
  return (
<div className="p-4 min-h-screen flex flex-col  items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pt-28">
      <div className="font-bold text-3xl">TO-Do</div>
      <form className="flex gap-5 mt-10">
        <input value={newTask} onChange={(e)=>{setnewTask(e.target.value)}} className=" border-2 border-white px-4 py-2  outline-none rounded-md " type="text" placeholder="Enter the Task" />
        <button onClick={addTask} className=" border-2 border-white rounded-md font-semibold bg-white text-sm p-2">
          Add Task
        </button>
      </form>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
        {
         todoList.map((item) => {
          return (
            <Todo item ={item} key={item.id} deleteTask={deleteTask}/>
            
          )
         })  
        }
      </div>
    </div> 
  )
}

export default App

