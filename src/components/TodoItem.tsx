import type { Todo } from ".."

interface Props {
    todo:Todo
}

export default function TodoItem({todo}:Props) {
  return (
    <div className="p-2.5 rounded-xl bg-blue-800 flex justify-between gap-2 items-center">
        <div>
            <h2 className="text-lg/6 font-bold">
                {todo.description}
            </h2>
        </div>
        <div className="flex flex-col gap-2">
            <button className="bg-green-400 hover:bg-green-500 text-while font-semibold py-2 px-4 cursor-pointer">Edit</button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 cursor-pointer">Delete</button>
        </div>
    </div>
  )
}
