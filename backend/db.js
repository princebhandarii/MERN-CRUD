import mongoose from "mongoose";

const connectTOMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected mongodb");
  } catch (error) {
    console.log(error);
  }
};
export default connectTOMongo;
