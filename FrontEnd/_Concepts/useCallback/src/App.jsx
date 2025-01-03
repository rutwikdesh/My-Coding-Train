import { useCallback, useState } from "react";
import Todos from "./Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;

// useCallback
// Purpose: Memoizes a function so that it is not re-created on every render unless its dependencies change.

// When to Use:
// When you pass a function as a prop to a child component, and you want to prevent unnecessary re-renders of the child.
// When you want to avoid creating a new function instance on every render, especially if the function is expensive to create.
