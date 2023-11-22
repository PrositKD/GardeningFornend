import React, { useState } from "react";
import Link from "next/link";
import Layout from "../layout/layout";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 4 characters long and contain at least one letter and one number"
      );
      return false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }
    setPasswordError(""); // Clear the password error message if the password is valid.
    return true;
  };

  const validateName = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/; // Regular expression to ensure the name doesn't contain numbers
    const nameWords = name.split(" ");

    if (nameWords.length < 2) {
      setNameError("Name should have at least two words");
      return false;
    } else if (!nameRegex.test(name)) {
      setNameError("Name cannot contain numbers");
      return false;
    }

    setNameError("");
    return true;
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isPasswordValid = validatePassword();

    if (!isNameValid) {
      return; // Stop registration if name is not valid
    }

    if (!emailOrPhone) {
      setEmailOrPhoneError("Email or phone number is required");
    } else {
      setEmailOrPhoneError("");
    }

    if (!isPasswordValid) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("Registration successful");
    }

    // Password and email/phone are valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;

    if (emailRegex.test(emailOrPhone)) {
      // Email format
      setEmailOrPhoneError("Email");
    } else if (phoneRegex.test(emailOrPhone)) {
      // Phone number format
      setEmailOrPhoneError("Phone");
    } else {
      setEmailOrPhoneError("Invalid email or phone number format");
    }
  };

  return (
    <Layout page="SignUp">
      
     <div className="min-h-screen bg-gray-300 flex justify-center items-center ">
    <div className="max-w-md w-full p-6 rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          Sign Up
      </h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
          />
          {nameError && <div className="text-red-500">{nameError}</div>}
        </div>
  
        <div className="mb-4">
          <label className="block font-medium">Email or Phone Number:</label>
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="input input-bordered w-full"
          />
          {emailOrPhoneError && (
            <div className="text-red-500">{emailOrPhoneError}</div>
          )}
        </div>
  
        <div className="mb-4 relative">
          <label className="block font-medium">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
          />
          <button
            type="button"
            className="btn btn-circle btn-ghost absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"} {/* Unicode for eye icon */}
          </button>
          {passwordError && <div className="text-red-500">{passwordError}</div>}
        </div>
  
        <div className="mb-4 relative">
          <label className="block font-medium">Confirm Password:</label>
          <input
            type={showPassword1 ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input input-bordered w-full"
          />
          <button
            type="button"
            className="btn btn-circle btn-ghost absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
            onClick={togglePasswordVisibility1}
          >
            {showPassword1 ? "👁️" : "👁️‍🗨️"} {/* Unicode for eye icon */}
          </button>
          {confirmPasswordError && (
            <div className="text-red-500">{confirmPasswordError}</div>
          )}
        </div>
  
        <button
          type="submit"
          onClick={handleRegistration}
          className="btn btn-primary w-full"
        >
          Register
        </button>
      </form>
      </div>
  </div>
  
  </Layout>
  
  );
};

export default RegistrationPage;
