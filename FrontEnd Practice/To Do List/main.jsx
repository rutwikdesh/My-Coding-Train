import { useState } from "react";
import "./styles.css";

export default function App() {
  const [myList, setMyList] = useState([
    { description: "Walk the dog", id: 1 },
    { description: "Water the plants", id: 2 },
    { description: "Wash the dishes", id: 3 },
  ]);

  const [task, setTask] = useState("");
  const [currId, setCurrId] = useState(4);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    setMyList(...myList, { description: task, id: currId });
    setCurrId(currId + 1);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          onChange={() => handleChange(e)}
        />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {myList &&
          myList.map((item) => (
            <li key={item.id}>
              <span>{item.description}</span>
              <button onClick={() => handleChange(item.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
