import { useEffect, useState } from "React";
import { createPost, deletePost, getPosts } from "../../api";
import PostForm from "./PostForm";
import PostList from "./PostList";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error.message);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, content: description });
      setIsCreatingPost(false);
      fetchPosts();
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Failed to create post:", error.message);
    }
  };

  const deletePosts = async (id) => {
    try {
      await deletePost(id);
      fetchPosts();
    } catch (error) {
      console.error("Failed to delete post:", error.message);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex justify-between w-full mb-4">
        <h1 className="text-[28px] font-bold">Posts</h1>
        <button
          className="bg-blue-500 text-white rounded-2xl px-3 py-2 hover:shadow-xl"
          onClick={() => setIsCreatingPost(true)}
        >
          + Create Post
        </button>
      </div>

      {isCreatingPost && (
        <PostForm
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          onSubmit={handleCreatePost}
          onCancel={() => setIsCreatingPost(false)}
        />
      )}

      <PostList posts={posts} deletePosts={deletePosts} />
    </div>
  );
};

export default Posts;
