/* eslint-disable react/prop-types */
import PostItem from "./PostItem";

const PostList = ({ posts }) => (
  <div className="flex w-full bg-slate-300 gap-4 px-4 rounded-xl flex-wrap">
    {posts && posts.length > 0 ? (
      posts.map((post) => <PostItem key={post.id} post={post} />)
    ) : (
      <div className="text-gray-700 text-center w-full py-4">
        No posts available
      </div>
    )}
  </div>
);

export default PostList;
