import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setUser({ ...user, [name]: value }); // Use e.target.name to update the respective field in the user object
    console.log("Updated User Object", user);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted User Data", user); // Use user object instead of logging undefined variables

    try {
      const response = await fetch('http://localhost:5000/api/v1/project/users/register', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(user)
      });

      const responseData = await response.json();
      if (response.status === 201) {
        toast.success("User registered successfully!");
        console.log(responseData.data);
      } else {
        toast.error('Failed to register user!');
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-gray-50">Register Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 text-left">
            <label htmlFor="fullname" className="block text-lg font-medium text-gray-300 mb-2">
              Fullname
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="fullname"
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="password" className="block text-lg font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 text-xl"
          >
            Register
          </button>
          <p className="mt-6 text-xl text-gray-300">
            Already have an account?{" "}
            <a href="/Getstarted" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </form>
        <ToastContainer /> 
      </div>
    </div>
  );
}

export default Register;
