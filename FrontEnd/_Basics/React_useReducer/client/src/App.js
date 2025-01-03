import "./App.css";
import { useReducer } from "react";

import { reducer, initUser } from "./state/index";

function App() {
  const [users, dispatch] = useReducer(reducer, initUser);

  const handleClick = (user) => {
    dispatch({ type: "COMPLETE", id: user.id, name: user.name });
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <button
            type="submit"
            className="submit"
            onClick={() => handleClick({ id: 1, name: "RD" })}
          >
            Submit
          </button>
          <div>{user.name}</div>
        </div>
      ))}
    </>
  );
}

export default App;
