
export  function FormTodoPage() {
  return (
    <form className="bg-gray-950 p-10">
      <h2 className="mb-7 text-3xl">A task</h2>

      <div className="mb-5">
        <input type="text" 
        name="title"
        placeholder="write a title"
        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
        />
      </div>

      <div className="mb-5">
        <textarea name="description" 
        rows={2}
        placeholder="Write a description"
        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full resize-none"></textarea>
      </div>

      <button
      className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">Create task</button>

    </form>
  )
}
