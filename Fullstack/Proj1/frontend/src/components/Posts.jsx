import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res?.data?.data?.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts data. " + error);
      });
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex justify-between w-full">
        <div className="flex justify-end w-full items-center">
          <h1 className="text-[28px]">Posts</h1>
        </div>
        <div className="flex w-full justify-end mr-2">
          <button className="bg-blue-400 border-blue-500 rounded-2xl px-3 py-2 m-2 mb-4 text-white hover:shadow-xl shadow-blue-400">
            + Create Post
          </button>
        </div>
      </div>
      <div className="flex w-full bg-slate-300 gap-4 px-4 rounded-xl">
        {posts !== undefined &&
          posts.map((post) => (
            <div
              key={uuid()}
              className="flex flex-col bg-gray-200 w-40 h-40 gap-3 p-2 my-4 rounded-xl"
            >
              <div className="text-[16px]">{post.title}</div>
              <div className="text-[12px]">{post.description}</div>
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
