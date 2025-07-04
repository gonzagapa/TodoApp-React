import { useState } from "react"
import { TodoContext} from "./TodoContext"
import { Todo } from ".."

interface Props {
    children:React.ReactNode
}





export const TodoProvider = ({children}:Props)=>{
    const listTodos:Todo[] = [
        new Todo("Terminar curso de React"),
        new Todo("Lavarme los dientes"),
    ]
    
    const [todos, setTodos]= useState(listTodos);

    return (
        <TodoContext.Provider value={{todos,setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}