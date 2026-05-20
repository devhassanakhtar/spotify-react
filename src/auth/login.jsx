import React, { useState } from "react";
import logo from "../assets/logo.png";
import GoogleLogo from "../assets/google.png";
import FacebookLogo from "../assets/facebook.png";
import AppleLogo from "../assets/apple.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (!foundUser) {
      alert("User not found or invalid email/password. Please sign up first.");
      return;
    }

    alert("Login successful");

    localStorage.setItem("token", "spotify-user-token");
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-white w-[340px] h-[50%] flex flex-col gap-2 md:gap-5 justify-center items-center">
        <img src={logo} alt="" />

        <h1 className="text-[43px] font-black">Welcome back</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-[var(--text-secondary)] p-3 rounded-sm"
            required
          />

          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-[var(--text-secondary)] p-3 rounded-sm"
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
          <button className="hover:scale-102 duration-75 cursor-pointer w-full p-3 rounded-full font-bold text-[15px] border flex items-center justify-center">
            <img src={GoogleLogo} alt="google img" className="w-6 mr-5" />
            Continue with Google
          </button>

          <button className="hover:scale-102 duration-75 cursor-pointer w-full p-3 rounded-full font-bold text-[15px] border flex items-center justify-center">
            <img src={FacebookLogo} alt="facebook img" className="w-6 mr-5" />
            Continue with Facebook
          </button>

          <button className="hover:scale-102 duration-75 cursor-pointer w-full p-3 rounded-full font-bold text-[15px] border flex items-center justify-center">
            <img src={AppleLogo} alt="apple img" className="w-6 mr-5" />
            Continue with Apple
          </button>
        </div>

        <h2 className="text-[var(--text-secondary)] font-semibold text-sm mt-5">
          Don't have an account?
        </h2>

        <Link
          to="/signup"
          className="text-lg font-bold cursor-pointer hover:scale-105 duration-75"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;