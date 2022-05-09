import { useContext, useEffect, useState } from "react";
import { TodoListContext } from "../../hooks/TodoListContext";
import { TodoItem } from "../TodoItem";
import { Container} from "./styles";

export interface Item {
  id: number,
  nameTask: string,
  check:boolean,
}


export function TodoList() {


  const [input, setInput] = useState<string>('')

  const [list, setList] = useState<Item[]>([])   
  
  const {} = useContext(TodoListContext)

  const [todoEditing,setTodoEditing] = useState(null)

  const [editingText,setEditingText] = useState('')

  useEffect(() => {
    const temp:any = localStorage.getItem("list")
    const loadedTodos = JSON.parse(temp)

    if (loadedTodos) {
      setList(loadedTodos)
    }
  },[])

  useEffect(() =>{
    const temp = JSON.stringify(list)
    localStorage.setItem('list',temp)
  },[list])

  function deleteTask(DeleteMsg: number){

    const deleteTaskId = list.filter((msgName) => msgName.id !== DeleteMsg )

    setList(deleteTaskId)
  }


  function handleAdd() {

    if(input !== ''){
        const newMsg ={
          id:new Date().getTime(),
          nameTask:input,
          check:false,
        }
        setList([...list, newMsg])
    }
  }

  const handleDigit = (event:any) => {
    setInput(event.target.value)
  }

  const onformSubmit = (e:any) => {
    e.preventDefault()
  }
 
 function editTask(id:number) {
    const updatedTodos = [...list].map((list) => {
      if(list.id === id){
      list.nameTask = editingText
    }
    return list
    })
    setList(updatedTodos)
    setTodoEditing(null)
    setEditingText('')
  }

  return (
    <>
    <Container>
      <form onSubmit={onformSubmit}>
      <div>
        <input
          type="text" placeholder="Digite a próxima atividade..."
          className="input-add"
          value={input}
          onChange={handleDigit} />
        <button
          type="submit"
          className="btn-add"
          onClick={(handleAdd)}
        >
          ADICIONAR
        </button> 
       { list !== [] ? (
         <div>
          {list.map((msg,key) =>(
          <TodoItem 
          key={key}
          msg = {msg}
          deleteTask={deleteTask}
          editTask={editTask}
          />
          ))}  
          </div>
        ) : null }
      </div>
      
    </form>
    </Container>
    </>
  );

}
