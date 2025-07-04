import { useTodoContext } from "../hooks/useTodoContext"
import TodoItem from "./TodoItem";


export function TodoList() {
  const {todos} = useTodoContext();
  return (
    <div className="grid gap-2.5">{
      todos.map(todo => (
        <TodoItem todo={todo} key={todo.id}/>
      ))
      }</div>
  )
}
