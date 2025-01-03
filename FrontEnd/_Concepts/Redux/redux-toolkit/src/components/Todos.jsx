import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full mt-10">
      <h1 className="roboto-light">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} className="flex w-full">
            <li
              key={todo.id}
              className="bg-blue-50 text-black p-2 m-2 flex-1 rounded"
            >
              {todo.text}
            </li>
            <button
              onClick={() => dispatch(removeTodo({ id: todo.id }))}
              className="bg-red-500 w-10 m-2 rounded"
            >
              X
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
