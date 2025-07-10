import { Link } from "react-router";
import type { Todo } from "../data"
import { useTodoContext } from "../hooks/useTodoContext"

interface Props {
    todo:Todo
}

export default function TodoItem({todo}:Props) {
        const {dispatch} = useTodoContext();
  return (
    <div 
    className={`${todo.done ? "bg-gray-800": "bg-gray-950"} rounded-xl flex justify-between gap-2 items-center w-full p-4`}>
        <div className="flex-1/3">
            <h2 className={`text-lg/5 font-bold font-s mb-3 ${todo.done ? "line-through": ""}`}>
                {todo.title}
            </h2>
            <p className={`line-clamp-1 ${todo.done ? "line-through": ""}`}>{todo.description}</p>
        </div>
        <div className="flex gap-2">
            <button className="rounded-md bg-teal-600 hover:bg-teal-500 text-while font-semibold py-2 px-4 cursor-pointer" onClick={()=> {dispatch({type:"[TODO] toggle", payload:todo})}}>Toggle</button>
            <button className="rounded-md bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 cursor-pointer" onClick={()=> {dispatch({type:"[TODO] delete", payload:todo})}}>Delete</button>

            <Link to={`edit/${todo.id}`}>
                <button className="rounded-md bg-amber-600 hover:bg-amber-500 text-white font-semibold py-2 px-4 cursor-pointer w-full">Edit</button>
            </Link>
        </div>
    </div>
  )
}
