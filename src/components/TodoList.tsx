import { useEffect } from "react";
import { useTodoContext } from "../hooks/useTodoContext"
import TodoItem from "./TodoItem";


export function TodoList() {
  const {todos} = useTodoContext();

  useEffect(
    ()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    }
, [todos])

  return (
    <div className="grid gap-2.5">{
     todos.length > 0 ? todos.map(todo => (
        <TodoItem todo={todo} key={todo.id}/>
      )) : <p className="text-xl text-white font-bold">Crea tus todos</p>
      }</div>
  )
}
