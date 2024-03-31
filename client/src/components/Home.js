import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function Home() {
  const [users, setUsers] = useState([]);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://mern-crud-a16a.onrender.com/api/delete/${userId}`
      );
      setUsers(users.filter((user) => user._id !== userId)); // Update the state after deletion
      swal("Success!", "User Delete Successfully", "success");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://mern-crud-a16a.onrender.com/api/getall"
        );
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="pt-5">
        <button className="btn btn-primary">
          <Link className="navbar-brand" to="/register">
            Add Data
          </Link>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {/* Render user cards */}
        {users.map((user) => (
          <div key={user._id} className="card w-72 bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="">Name:{user.name}</p>
              <p>Email: {user.Email}</p>
              <p>Age: {user.age}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-warning mr-2">
                  <Link
                    to={`/edit/${user._id}`}
                    className="fa-solid fa-pen-nib"
                  ></Link>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
