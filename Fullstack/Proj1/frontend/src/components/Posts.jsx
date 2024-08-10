import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { createPost, getPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createPostForm, setCreatePostForm] = useState(false);

  useEffect(() => {
    getPostsData();
  }, []);

  const getPostsData = async () => {
    try {
      const posts = await getPosts();
      setPosts(posts?.data);
    } catch (error) {
      console.error("API error: ", error.message);
    }
  };

  const submitCreatePostForm = async (event) => {
    event.preventDefault();
    try {
      const data = {
        title: title,
        content: description,
      };
      await createPost(data);
      setCreatePostForm(false);
      getPostsData();
    } catch (error) {
      console.error("API error: ", error.message);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex justify-between w-full">
        <div className="flex justify-end w-full items-center">
          <h1 className="text-[28px]">Posts</h1>
        </div>
        <div className="flex w-full justify-end mr-2">
          <button
            className="bg-blue-400 border-blue-500 rounded-2xl px-3 py-2 m-2 mb-4 text-white hover:shadow-xl shadow-blue-400"
            onClick={() => setCreatePostForm(true)}
          >
            + Create Post
          </button>
        </div>
      </div>
      {createPostForm && (
        <div className="absolute top-0 flex justify-center items-center bg-slate-700 bg-opacity-40 w-full h-[100%]">
          <form
            className="flex flex-col gap-4 bg-orange-300 py-12 px-8 rounded-xl shadow-md shadow-orange-600"
            onSubmit={submitCreatePostForm}
          >
            <h1 className="text-[22px]">Create Post</h1>
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="rounded-lg px-1 py-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="rounded-lg px-1 py-1"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="py-1 px-2 bg-green-600 text-white w-full rounded-xl"
              >
                Submit
              </button>
              <button
                onClick={() => setCreatePostForm(false)}
                className="py-1 px-2 bg-gray-900 text-white w-full rounded-xl"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="flex w-full bg-slate-300 gap-4 px-4 rounded-xl">
        {posts !== undefined &&
          posts.map((post) => (
            <div
              key={uuid()}
              className="flex flex-col bg-gray-200 w-40 h-40 gap-3 p-2 my-4 rounded-xl"
            >
              <div className="text-[16px]">{post.title}</div>
              <div className="text-[12px]">{post.content}</div>
              <div className="flex flex-col justify-end h-full">
                <div className="flex justify-between">
                  <button className="bg-green-600 text-white rounded-md px-2 py-1 max-w-min hover:shadow-lg shadow-green-800">
                    View
                  </button>
                  <button className="bg-red-600 text-white rounded-md px-2 py-1 max-w-min hover:shadow-lg shadow-red-800">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
