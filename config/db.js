import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // use environment variable
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};
