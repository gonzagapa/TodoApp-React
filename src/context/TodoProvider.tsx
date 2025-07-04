import { useReducer } from "react"
import { TodoContext} from "./TodoContext"
import { Todo } from "../data"
import { todoReducer } from "./todoReducer"

interface Props {
    children:React.ReactNode
}

const initialState:Todo[] = [
        new Todo("Terminar curso de React"),
        new Todo("Lavarme los dientes"),
    ]

export const TodoProvider = ({children}:Props)=>{
    const [todos, dispatch]= useReducer(todoReducer,initialState);

    return (
        <TodoContext.Provider value={{todos,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}