import React, { useState } from "react";
import axios from "axios";
import Toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Register() {
  const user = {
    name: "",
    Email: "",
    age: "",
  };

  const [users, setusers] = useState(user);

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setusers({ ...users, [name]: value });

    //console.log(users);
  };

  const navigate = useNavigate();

  const submitform = async (e) => {
    e.preventDefault();
    await axios
      .post("https://mern-crud-a16a.onrender.com/api/create", users)
      .then((Response) => {
        Toast.success(Response.data.msg, { position: "top-right" });
        swal("Success!", "User Added Successfully", "success");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1 className="text-center text-bold">Register</h1>
      <form onSubmit={submitform}>
        <div className="form-group">
          <label htmlFor="name">Enter your name</label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            required
            onChange={inputHandler}
          />
        </div>
        <div className="form-group pt-4">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email"
            name="Email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            onChange={inputHandler}
          />
        </div>
        <div className="form-group pt-4">
          <label htmlFor="age">Enter your age</label>
          <input
            type="age"
            className="form-control"
            id="age"
            name="age"
            placeholder="Enter age"
            required
            onChange={inputHandler}
          />
        </div>

        <div className="pt-3">
          <button type="submit" className="  btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
