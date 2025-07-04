import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


export function useTodoContext() {
  const todoContext = useContext(TodoContext);

  if(!todoContext){
    throw Error("useTodoContext has to be used within <TodoContext.Provider></TodoContext.Provider>")
  }

    return todoContext
}
