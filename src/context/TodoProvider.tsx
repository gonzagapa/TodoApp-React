import { useReducer } from "react"
import { TodoContext} from "./TodoContext"
import { Todo } from "../data"
import { todoReducer } from "./todoReducer"

interface Props {
    children:React.ReactNode
}


const initialState:Todo[] = localStorage.getItem("todos")?.length == 0 ?
[] : JSON.parse(localStorage.getItem("todos")!);

export const TodoProvider = ({children}:Props)=>{
    console.log({todos:localStorage.getItem("todos")});
    const [todos, dispatch]= useReducer(todoReducer,initialState);

    return (
        <TodoContext.Provider value={{todos,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}