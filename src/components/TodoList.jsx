export default function TodoList(props) {
    const {todos, onDeleteTodo} = props;

  return (
    <div className="w-full max-w-md flex flex-col m-3 ">
        <ul className="space-y-2">
            {todos.map((todo, index) => (
                <li key={index} className="flex justify-between bg-white p-2 rounded-md shadow-sm">
                    <span>{todo}</span>
                    <button 
                        onClick={() => onDeleteTodo(index)} 
                        className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
