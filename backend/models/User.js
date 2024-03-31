import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  name: {
    type: String,
  },
  Email: {
    type: String,
  },
  age: {
    type: String,
  },
});

const UserModels = mongoose.model("user", userschema);
export default UserModels;
