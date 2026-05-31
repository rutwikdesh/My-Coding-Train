import express, { json } from "express";
import axios from "axios";
import client from "./client.js";

const app = express();
const PORT = 9000;

app.use(json());

app.get('/todos', async (req, res) => {
  const cachedData = await client.get('todos');
  if (cachedData) return res.status(200).json(JSON.parse(cachedData));

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

  await client.set('todos', JSON.stringify(data));
  await client.expire('todos', 10);

  return res.status(200).json(data);
});

app.get('/todos/:id', async (req, res) => {
  const { id } = req.params;

  const cachedData = await client.get(`todos:${id}`);
  if (cachedData) return res.status(200).json(JSON.parse(cachedData));

  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

  await client.set(`todos:${id}`, JSON.stringify(data));
  await client.expire('todos', 30);

  return res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}...`);
});
