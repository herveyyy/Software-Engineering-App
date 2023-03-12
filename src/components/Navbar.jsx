import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";

function Button({ text, bg, padding }) {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);

  const location = useLocation();

  const handleLoginButtonClick = () => {
    if(location.pathname == '/login'){
      setBtnDisable(true);
    }else{
       console.log(location);
      setIsLoginFormOpen(true);
      console.log("btn Click");
      setBtnDisable(false);
    }
   
  };

  const handleCloseLoginForm = () => {
    setIsLoginFormOpen(false);
  };
  return (
    <div>
      <button
      disabled={btnDisable}
        onClick={handleLoginButtonClick}
        className={`
          ${padding || "px-6 py-2"} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
      <LoginForm isOpen={isLoginFormOpen} onClose={handleCloseLoginForm} />
    </div>
  );
}

function Navbar() {
  return (
    <div className=" z-40 fixed left-0 right-0 top-0 h-16 shadow-md border-gray-100 bg-gray-900">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <div className=""> 
          <h1 className=" font-semibold uppercase text-lg text-gray-200">
          🤓 SOFTWARE ENGINEER
        </h1>
        </div>
       
        <div >
          <ul className="flex items-center space-x-10 text-sm">
            <li>
              <Link to="/" className="text-gray-400 hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-gray-100">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Button
            text="Admin"
            bg="bg-gradient-to-r from-purple-500 to-blue-500"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;