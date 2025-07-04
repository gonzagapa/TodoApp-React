import { createContext } from "react";
import { Todo } from "..";

type TodosContextType = {
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoContext = createContext<TodosContextType | null>(null)