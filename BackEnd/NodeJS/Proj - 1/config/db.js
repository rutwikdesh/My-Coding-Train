import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/practice");
    console.log("Database connected! 🔥");
  } catch (err) {
    console.log(`Error connecting to DB: ${err.message}`);
  }
};
