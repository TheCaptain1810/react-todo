import { useState } from "react";

export default function TodoForm(props) {
    const {onAddTodo} = props;
    const [todo, setTodo] = useState("");

  return (
    <div className="flex flex-col items-center space-y-4 max-w-md">
        <div className="flex w-full space-x-3">
            <input 
                type="text" 
                placeholder="Enter a new Todo" 
                className="border border-gray-300 p-2 rounded-md w-full"
                onChange={(e) => {
                    setTodo(e.target.value);
                }} 
                value={todo}
            />
            <button 
                onClick={() => {
                    onAddTodo(todo);
                    setTodo("");
                }} 
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-24"
            >
                Add Todo
            </button>
        </div>
    </div>
  )
}
