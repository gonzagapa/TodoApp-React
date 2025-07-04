import { createContext } from "react";
import { Todo } from "../data";
import type { Action } from "./todoReducer";

type TodosContextType = {
    todos:Todo[],
    dispatch: React.ActionDispatch<[action: Action]>
}

export const TodoContext = createContext<TodosContextType | null>(null)