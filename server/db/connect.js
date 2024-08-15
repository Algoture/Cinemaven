import mongoose from "mongoose";

const connectDb = (url) => {
  //   console.log("db connected");
  return mongoose.connect(url);
};
export default connectDb;
