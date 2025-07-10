import { useNavigate, useParams } from "react-router";
import { useTodoContext } from "../hooks/useTodoContext"
import { useForm } from "../hooks/useForm";
import { Todo } from "../data";
import { type FormEvent } from "react";

export  function FormTodoPage() {
  const {dispatch,todos} = useTodoContext();
  let navigate = useNavigate();
  let {id} = useParams();

  
  const todo = todos.find(todo => todo.id === Number(id));
  
  const initialForm = id && todo ? 
  {title:todo.title,description:todo.description}
  :{title:"",description:""}


  const {title, description, onInputChange} = useForm(initialForm);


  const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    if(!id){ //if id doesnt exist
      const newTodo = new Todo(description,title);
      dispatch({type:"[TODO] add",payload:newTodo});
    }
    else{    
      dispatch({type:"[TODO] edit", payload:{...todo as Todo,description,title}})
    }
    
    navigate("/");
  }

  return (
    <form className="bg-gray-950 p-10" onSubmit={handleSubmit}>
      <h2 className="mb-7 text-3xl text-center">{id ? "Edit": "Create" } a task</h2>

      <div className="mb-5">
        <input type="text" 
        value={title}
        onChange={onInputChange}
        name="title"
        placeholder="write a title"
        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
        />
      </div>

      <div className="mb-5">
        <textarea name="description" 
        value={description}
        onChange={onInputChange}
        rows={2}
        placeholder="Write a description"
        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full resize-none"></textarea>
      </div>

      <button
      className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">Create task</button>

    </form>
  )
}
