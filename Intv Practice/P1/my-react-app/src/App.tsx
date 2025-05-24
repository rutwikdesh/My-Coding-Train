import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Router, BrowserRouter, Link } from "react-router";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get("https://api.restful-api.dev/objects");
        if (response?.data) {
          // console.log(response.data);
          setItems(response.data);
        }
      } catch (err) {
        console.log(`Error while fetching : ${err}`);
      }
    }
    getItems();
  }, []);

  const deleteKey = function (key: number) {
    let updatedItems = [...items];
    updatedItems = updatedItems.filter(
      (item: { id: number }) => item.id !== key
    );
    setItems(updatedItems);
  };

  return (
    <>
      <div>
        <ul>
          {items.map((item: { name: string; id: number }) => (
            <div>
              <li key={item.id}>{item.name}</li>
              <button onClick={() => deleteKey(item.id)}>Delete</button>
            </div>
          ))}

          <BrowserRouter>
            <Routes>
              <Link navigateTo={Home}>Home</Link>
              <Link navigateTo={About}>About</Link>
            </Routes>
          </BrowserRouter>
        </ul>
      </div>
    </>
  );
}

export default App;
