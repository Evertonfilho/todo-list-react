import { useState,useContext } from "react";
import deleteImg from "../../assets/delete.svg";
import editImg from "../../assets/edit.svg";
import { TodoListContext } from "../../hooks/TodoListContext";
import { Item } from "../TodoList";
import { Container } from "./styles";


interface MsgProps {
  msg:Item,
  deleteTask(DeleteMsg:number): void,
  editTask(id:number):void,
}


export function TodoItem({msg,deleteTask,editTask}:MsgProps) {
  
   const {} = useContext(TodoListContext)
  
   const [todoEditing,setTodoEditing] = useState<number>() 
   const [editingText,setEditingText] = useState('')   
   const [isChecked,setIsChecked] = useState(msg.check) 
  
  return (
   
    
    <Container done={isChecked}>

      <div className="btn-check">
      <input 
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
      />
      </div>

      <ul className="task" >
        
        {todoEditing === msg.id ? 
         (<input
          type="text"
          onChange={(e) => setEditingText(e.target.value)}
          value={editingText}
          />)
          : (<li>{msg.nameTask}</li>)}
      </ul>



    <div className="btn-edit" >
          {todoEditing === msg.id ?
           (<button 
           className="btn-edit"
           type="button"
           onClick={() => editTask(msg.id)}
           >
            <img src={editImg} alt="Edit" />
          </button>)  
           :  
           (<button 
            className="btn-edit"
            type="button"
            onClick={() => setTodoEditing(msg.id)}
            >
            <img src={editImg} alt="Edit" />
           </button>)}
    </div>

    <div className="btn-delete">
        <button
          type="button"
        >
          <img src={deleteImg} alt="Delete" onClick={() => deleteTask(msg.id)} />
        </button>
      </div>
      </Container>

          

    
  );
}

