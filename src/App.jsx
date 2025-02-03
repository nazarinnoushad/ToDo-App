import { useEffect, useState } from 'react'
import Todo from './components/Todo';
import EditForm from './components/EditForm'
const localData = ()=>{
  let list = localStorage.getItem("data")
  if (list){
    return JSON.parse(list)
  }else{
    return[]
  }
}
function App() {
  const [todoList, settodoList] = useState(localData()); 
     const [newTask, setnewTask] = useState("");
     const [date, setDate] = useState(new Date());
const clock = ()=>{
  setInterval(()=>{setDate(new Date(),1000)})
}
useEffect(()=>{
  clock()
  return function clearUp(){
    clearInterval(clock)
  }
},[])
     // Add Task

 const addTask =(e)=>{ 
  e.preventDefault()
 if (!newTask) {
  alert("Enter the Task")
 }
 else{
  let num = todoList.length +1
  let newEntry = {id:num,taskName:newTask,isComplete:false}
  settodoList([...todoList,newEntry])
  setnewTask("") 
 } 
}

// local storage

useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(todoList))
},[todoList])

// Delete Task

const deleteTask = (id) => {
  settodoList(
    todoList.filter((item) => {
    return item.id !==id
  }))
}

// iscomplete

const doneTask = (id) => {
  console.log("working")
  settodoList(todoList.map((item) => {
    return item.id === id ? { ...item, isComplete: !item.iscomplete } : item
  }))
  
}

// Edit Task

const editTask = (id)=>{
  settodoList(todoList.map((item)=>{
    return item.id ===id?{...item,
      isEditing : !item.isEditing
    }:item
  } ))
}

// Update Task

const updateTask = (modifiedTask,id)=>{
  settodoList(
    todoList.map((item)=>{
      return item.id === id 
      ?{ ...item, taskName: modifiedTask, isEditing:!item.isEditing}
      :item;
    })
  )
}



  return (
<div className="p-4 min-h-screen flex flex-col  items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pt-28">
      <div className="font-bold text-3xl">TO-Do</div>
      <h2 className='mt-10 font-bold text-lg text-pink-900 font-serif'>Time: {date.toLocaleTimeString()}</h2>
      <h2 className='mt- font-bold text-md font-serif text-pink-900'>Date: {date.toLocaleDateString()}</h2>
      <form className="flex gap-5 mt-10">
        <input value={newTask} onChange={(e)=>{setnewTask(e.target.value)}} className=" border-2 border-white px-4 py-2  outline-none rounded-md " type="text" placeholder="Enter the Task" />
        <button onClick={addTask} className=" border-2 border-white rounded-md font-semibold bg-white text-sm p-2">
          Add Task
        </button>
      </form>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
      {todoList.map((item, index) => {
  return item.isEditing ? (
    <EditForm item={item} key={item.id} updateTask={updateTask} />
  ) : (
    <Todo
      item={item}
      key={item.id}
      deleteTask={deleteTask}
      doneTask={doneTask}
      index={index}
      editTask={editTask}
    />
  );
})}
      </div>
    </div> 
  )
}

export default App

