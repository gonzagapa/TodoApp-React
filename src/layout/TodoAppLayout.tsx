import { Outlet } from "react-router";


export function TodoAppLayout() {
  return (
    <div className=" bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white h-screen p-2.5">
        <h1>Heading</h1>
        <div >
            <Outlet/>
        </div>
    </div>
  )
}