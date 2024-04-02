import { useEffect, useState } from "react";
import ToDo from "./componenets/ToDo"
import { getAllToDo , updateTodo , addToDo,deleteToDo} from "./utils/handleApis";

function App() {

  const [toDo , setToDo] = useState([])
  const [text , setText] = useState("")
  const [isUpdating , setIsUpdating] = useState(false)
  const [toDoId , setToDoId] = useState("")

  // const updateMode = (_id,text)=>{
  //   setIsUpdating(true)
  //   setText(text)
  //   setToDoId(_id)
  // }

  useEffect(()=>{
    getAllToDo(setToDo)
  },[])
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>
        <div className="top"> 
        <input type="text" placeholder="Add Items" value={text} onChange={(i)=>setText(i.target.value)}/>
        <div className="add" onClick={()=>addToDo(text , setText , setToDo)}>{"Add"}</div>
        </div>
        <div className="list">
          {toDo.map((item)=><ToDo key = {item._id} text={item.text}  deleteToDo={()=>deleteToDo(item._id,setToDo)}/>)}
          {/* {toDo.map((item)=><ToDo key = {item._id} text={item.text} updateMode={()=>updateMode(item._id,item.text)} deleteToDo={()=>deleteToDo(item._id,setToDo)}/>)} */}
        </div>
      </div>
    </div>
  );
}

export default App;
