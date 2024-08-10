const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({
      title: title,
      content: content,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedPost = {
      title: title,
      content: content,
    };
    const post = await Post.findByIdAndUpdate(req.params.id, updatedPost, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      return res.status(404).json({ message: "Post not Found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getPosts, createPost, updatePost };
