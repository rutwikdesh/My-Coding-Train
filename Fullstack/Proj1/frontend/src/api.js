import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/posts");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createPost = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/api/posts", data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getPosts, createPost };
