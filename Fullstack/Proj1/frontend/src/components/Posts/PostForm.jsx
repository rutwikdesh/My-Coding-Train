/* eslint-disable react/prop-types */

const PostForm = ({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
  onCancel,
}) => (
  <div className="fixed top-0 left-0 flex justify-center items-center bg-slate-700 bg-opacity-40 w-full h-full z-10">
    <form
      className="flex flex-col gap-4 bg-orange-300 py-12 px-8 rounded-xl shadow-md"
      onSubmit={onSubmit}
    >
      <h2 className="text-[22px] font-semibold">Create Post</h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-lg px-1 py-1 border"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-lg px-1 py-1 border"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="py-1 px-2 bg-green-600 text-white w-full rounded-xl hover:bg-green-700"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="py-1 px-2 bg-gray-900 text-white w-full rounded-xl hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </form>
  </div>
);

export default PostForm;
