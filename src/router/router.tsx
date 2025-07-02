import { createBrowserRouter } from "react-router";
import { ErrorPage, } from "../components";
import { TodoAppLayout } from "../layout";
import { FormTodoPage, TodoAppPage } from "../pages";


export const Router = createBrowserRouter([{
    path:"/",
    element:<TodoAppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
        path:"",
        element:<TodoAppPage/>
        },
        {
            path:'add',
            element:<FormTodoPage/>
        }
]
}])