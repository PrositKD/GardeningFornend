import React from 'react';
import { useState } from 'react';

import Link from "next/link";

import { useRouter } from 'next/router';

const Modal = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(01)\d{9}$/;

  const router = useRouter();
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    
    if (!emailRegex.test(username) && !phoneRegex.test(username)) {
      setErrorMessage("Invalid email address or phone number");
      return;
    } else if (!password.trim()) {
      setErrorMessage("Password is required");
      return;
    }
  
    router.push('/');
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="modal-container bg-white mx-auto rounded shadow-lg p-6 mt-16 relative">
    <button onClick={onClose} className="btn btn-ghost absolute top-2 right-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block font-medium">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email or Phone here" className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password here" className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-600">Login</button>
        <h5 className="mt-2 text-sm">
          New User? <Link href="/user/signup" className="text-blue-500">SignUp</Link>
        </h5>
      </form>
  
    </div>
  </div>
  
  
  );
};

export default Modal;