/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/export */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createContext,ReactNode,useState} from 'react'

type TodoListProps = {
  children:ReactNode;
}

type ItemProps = {
  todoEditing:number,
  setTodoEditing:(newState:number) => void,
  editingText:string,
  setEditingText:(newState:string) => void,
  isChecked:boolean,
  setIsChecked:(newState:boolean) => void
}

const initialItem = {
  todoEditing:0,
  setTodoEditing:() => {},
  editingText:'',
  setEditingText:() => {},
  isChecked:false,
  setIsChecked:() => {}
}

export const TodoListContext = createContext<ItemProps>(initialItem)

export const TodoListContextProvider = ({children}:TodoListProps) => {
  const [todoEditing,setTodoEditing] = useState(initialItem.todoEditing)
  const [editingText,setEditingText] = useState(initialItem.editingText) 
  const [isChecked,setIsChecked] = useState(initialItem.isChecked)

  return(
    <TodoListContext.Provider
     value={{
       todoEditing,
       setTodoEditing,
       editingText,
       setEditingText,
       isChecked,
       setIsChecked,
    }}>
    {children}
    </TodoListContext.Provider>
  )

}


