import type { Todo } from "../data"
import { useTodoContext } from "../hooks/useTodoContext"

interface Props {
    todo:Todo
}

export default function TodoItem({todo}:Props) {
        const {dispatch} = useTodoContext();
  return (
    <div className="p-2.5 rounded-xl bg-gray-950 flex justify-between gap-2 items-center w-sm">
        <div className="flex-1/3">
            <h2 className="text-lg/5 font-bold font-s">
                {todo.title}
            </h2>
            <p className="line-clamp-1">{todo.description}</p>
        </div>
        <div className="flex flex-col gap-2">
            <button className="bg-green-600 hover:bg-green-500 text-while font-semibold py-2 px-4 cursor-pointer">Edit</button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 cursor-pointer" onClick={()=> {dispatch({type:"[TODO] delete", payload:todo})}}>Delete</button>
        </div>
    </div>
  )
}
