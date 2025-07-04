import { useTodoContext } from "../hooks/useTodoContext"


export function TodoList() {
  const {todos} = useTodoContext();
  return (
    <div>{
      todos.map(todo => (
        <p key={todo.id}>{todo.description}</p>
      ))
      }</div>
  )
}
