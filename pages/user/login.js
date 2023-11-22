import React, { useState,useEffect } from "react";

import Link from "next/link";

import { useRouter } from 'next/router';


const Login = () => {
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
  
    router.push('/user/home');
  };
  
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-80 bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-semibold mb-4 text-center bg-blue">Login</h2>
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

export default Login;
// let email;
//    function returnValue() {
//     return email;
//   }
  
//   function setValue(email) {
//     email = email;
//     console.log(email);
//     return email;
//   }
