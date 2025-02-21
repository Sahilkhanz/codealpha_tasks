"use client";
import React, { useEffect, useState } from "react";
import bcrypt from "bcryptjs";
import Page from "../Student/List";

const users = [
  {
    id: 1,
    username: "john",
    password: bcrypt.hashSync("password123", 10),
    email: "john@gmail.com",
    resetToken: "",
  },
  {
    id: 2,
    username: "emma",
    password: bcrypt.hashSync("emma@123", 10),
    email: "emma@gmail.com",
    resetToken: "",
  },
  {
    id: 3,
    username: "mike",
    password: bcrypt.hashSync("mikepass", 10),
    email: "mike@gmail.com",
    resetToken: "",
  },
  {
    id: 4,
    username: "sarah",
    password: bcrypt.hashSync("sarah@123", 10),
    email: "sarah@gmail.com",
    resetToken: "",
  },
  {
    id: 5,
    username: "alex",
    password: bcrypt.hashSync("alex123", 10),
    email: "alex@gmail.com",
    resetToken: "",
  },
  {
    id: 6,
    username: "lisa",
    password: bcrypt.hashSync("lisa@123", 10),
    email: "lisa@gmail.com",
    resetToken: "",
  },
];

console.log(users);

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    // Check if a saved password exists in local storage for the user
    const savedPassword = localStorage.getItem(`resetPassword_${username}`);
    if (savedPassword) {
      setShowResetForm(true);
    }
  }, [username]);

  const handleLogin = async () => {
    try {
      const user = users.find((u) => u.username === username);
      if (!user) {
        throw new Error(alert("User not found !"));
      }

      let validPassword = false;

      // Check if saved password exists in local storage
      const savedPassword = localStorage.getItem(`resetPassword_${username}`);
      if (savedPassword) {
        validPassword = await bcrypt.compare(password, savedPassword);
      } else {
        // If no saved password, compare with the original password
        validPassword = await bcrypt.compare(password, user.password);
      }

      if (!validPassword) {
        throw new Error(alert("Invalid password !"));
      }

      if (email.trim() !== user.email) {
        throw new Error(alert("Invalid Email !"));
      }

      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!validEmail.test(email)) {
        throw new Error(alert("Invalid email format !"));
      }

      setIsLoggedIn(true);
      setMessage("Login successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMessage(alert("Logged out successfully"));
  };

  const sendResetLink = async () => {
    try {
      const user = users.find((u) => u.email === email);
      if (!user) {
        throw new Error(alert("User not found"));
      }

      const token = Math.random().toString(36);
      setResetToken(token);

      setShowResetForm(true);
      setMessage(alert("Password reset link sent to your email."));
    } catch (error) {
      console.error("Error sending reset link:", error);
      setMessage(alert("Error sending reset link. Please try again later."));
    }
  };

  const handleResetPassword = async () => {
    try {
      const user = users.find((u) => u.email === email);
      if (!user) {
        throw new Error("User not found");
      }

      const hashedPassword = bcrypt.hashSync(newPassword, 10);
      user.password = hashedPassword;
      setMessage(alert("Password reset successfully."));

      localStorage.setItem(`resetPassword_${user.id}`, hashedPassword);
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Error resetting password. Please try again later.");
    }
  };

  if (isLoggedIn) {
    return <Page />;
  }

  const back = () => {
    setShowResetForm(!showResetForm);
    setResetToken(!resetToken);
  };

  return (
    <div className="flex justify-center mt-12 items-center h-screen bg-gray-200">
      <div className="p-6 bg-white rounded-lg shadow-md grid grid-flow-row">
        <img
          src="/images/backHome.png"
          alt="form_back"
          onClick={back}
          className="w-6 h-5"
        />
        <h1 className="font-bold text-center text-xl text-slate-950 mb-5">
          Welcome to <a className="text-red-500">GPD</a>{" "}
        </h1>

        {!showResetForm && (
          <div className="grid grid-flow-row mr-3 p-2">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input mb-4 border rounded-lg shadow-md"
              style={{ backgroundColor: "#EEEEEE" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input mb-4 border rounded-lg shadow-md"
              style={{ backgroundColor: "#EEEEEE" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input mb-4 border rounded-lg shadow-md"
              style={{ backgroundColor: "#EEEEEE" }}
            />

            <button
              onClick={handleLogin}
              className="btn w-1/3 ml-16  mb-4 bg-gradient-to-r from-red-400 via-orange-600 to-pink-500 mr-5 border rounded-lg"
            >
              Login
            </button>
          </div>
        )}

        {!showResetForm && (
          <button
            onClick={() => setShowResetForm(true)}
            className="btn font-semibold m-10 hover:underline"
          >
            Forgot Password
          </button>
        )}
        {message}
        {showResetForm && (
          <div key="reset-form" className="grid grid-flow-row mr-5 p-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input mb-4 border rounded-lg shadow-md"
            />
            <button
              onClick={sendResetLink}
              className="btn border m-10 rounded-lg"
            >
              Send Reset Link
            </button>
          </div>
        )}
        {resetToken && (
          <div key="new-password-form" className="grid grid-flow-row mr-5 p-2">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="input mb-4 border rounded-lg shadow-md"
            />
            {!isLoggedIn && (
              <button
                onClick={handleResetPassword}
                className="btn border m-10 rounded-lg"
              >
                Reset Password
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
