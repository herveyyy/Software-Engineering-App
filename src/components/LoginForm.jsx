import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginForm({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    if(email == "admin@gmail.com" && password == 1234){
      alert("Praise Admin")
      navigate("/login");
    }else{
      alert("not admin!")
    }


    onClose();
  }
{/* <Link to='/login'></Link> */}
  return (
    <>
      {isOpen && (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
          <div className="bg-white rounded-lg overflow-hidden max-w-md mx-auto z-10">
            <div className="p-4 flex justify-between items-center bg-gray-100">
              <h2 className="text-lg font-medium">🍁Admin Login</h2>
              <button onClick={onClose}>
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="border border-gray-400 p-2 w-full rounded"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="border border-gray-400 p-2 w-full rounded"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-right">
                
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>

            <button
              onClick={onClose}
              className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginForm;