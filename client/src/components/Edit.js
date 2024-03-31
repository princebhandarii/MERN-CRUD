import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "react-hot-toast";
import swal from "sweetalert";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    Email: "",
    age: "",
  });

  useEffect(() => {
    axios
      .get(`https://mern-crud-a16a.onrender.com/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://mern-crud-a16a.onrender.com/api/update/${id}`,
        user
      );
      Toast.success("User updated successfully", { position: "top-right" });
      swal("Success!", "User updated successfully", "success");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-center text-bold">Edit Data</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            required
            onChange={inputChange}
            value={user.name}
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
            onChange={inputChange}
            value={user.Email}
          />
        </div>
        <div className="form-group pt-4">
          <label htmlFor="age">Enter your age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            placeholder="Enter age"
            required
            onChange={inputChange}
            value={user.age}
          />
        </div>

        <div className="pt-3">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
