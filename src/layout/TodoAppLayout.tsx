import { Outlet } from "react-router";
import { Heading } from "../components";
import { TodoProvider } from "../context/TodoProvider";


export function TodoAppLayout() {
  return (
    <div className=" bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white h-screen p-2.5">
      <div className="container mx-auto h-full">
        <Heading/>
        <TodoProvider>
          <div className="grid place-content-center">
              <Outlet/>
          </div>
        </TodoProvider>
      </div>
    </div>
  )
}