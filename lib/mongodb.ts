import mongoose from "mongoose";

export const connectMongoDB = async (): Promise<void> => {
  if (!process.env.MONGODB_URI) {
    throw new Error("data base URL isnot defined");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
