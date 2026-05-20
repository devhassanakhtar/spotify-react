import React, { useState } from "react";
import logo from "../assets/logo.png";
import GoogleLogo from "../assets/google.png";
import AppleLogo from "../assets/apple.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userAlreadyExists = existingUsers.find(
      (user) => user.email === formData.email,
    );

    if (userAlreadyExists) {
      alert("This email is already registered. Please login.");
      return;
    }

    const newUser = {
      id: Date.now(),
      email: formData.email,
      password: formData.password,
    };

    const updatedUsers = [...existingUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Signup successful. Please login.");

    navigate("/login", { replace: true });

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-white w-[340px] h-[50%] flex flex-col gap-2 md:gap-5 justify-center items-center">
        <img src={logo} alt="" />

        <h1 className="text-[48px] text-center font-black leading-tight">
          Sign up to start listening
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email Address</label>

          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-[var(--text-secondary)] p-3 rounded-sm placeholder:text-[var(--text-secondary)] hover:border-white"
            placeholder="name@domain.com"
            required
          />

          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-[var(--text-secondary)] p-3 rounded-sm placeholder:text-[var(--text-secondary)] hover:border-white"
            placeholder="Create a password"
            required
          />

          <button
            type="submit"
            className="bg-[var(--spotify-green)] mt-3 hover:scale-102 duration-75 cursor-pointer w-full p-3 rounded-full text-black font-bold text-lg"
          >
            Continue
          </button>
        </form>

        <h1 className="text-[15px] font-bold">or</h1>

        <div className="w-full flex flex-col gap-3">
          <button className="hover:scale-102 duration-75 cursor-pointer w-full p-3 rounded-full font-bold text-[15px] border border-[var(--text-secondary)] flex items-center justify-center hover:border-white">
            <img src={GoogleLogo} alt="google img" className="w-6 mr-5" />
            Sign up with Google
          </button>

          <button className="hover:scale-102 duration-75 cursor-pointer w-full p-3 rounded-full font-bold text-[15px] border border-[var(--text-secondary)] flex items-center justify-center hover:border-white">
            <img src={AppleLogo} alt="apple img" className="w-6 mr-5" />
            Sign up with Apple
          </button>
        </div>

        <h2 className="text-[var(--text-secondary)] font-semibold text-sm mt-5">
          Already have an account?
        </h2>

        <Link
          to="/login"
          className="text-lg font-bold cursor-pointer hover:scale-105 duration-75"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
