/* eslint-disable react/prop-types */

const PostItem = ({ post }) => (
  <div className="flex flex-col bg-gray-200 w-40 h-40 gap-3 p-2 my-4 rounded-xl">
    <div className="text-[16px] font-semibold">{post.title}</div>
    <div className="text-[12px] text-gray-700">{post.content}</div>
    <div className="flex flex-col justify-end h-full">
      <div className="flex justify-between">
        <button className="bg-green-600 text-white rounded-md px-2 py-1 hover:shadow-lg">
          View
        </button>
        <button className="bg-red-600 text-white rounded-md px-2 py-1 hover:shadow-lg">
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default PostItem;
