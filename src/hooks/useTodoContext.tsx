import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


export function useTodoContext() {
  const todoContext = useContext(TodoContext);

  if(!todoContext){
    throw Error("the provider is wrong place")
  }

    return todoContext
}
