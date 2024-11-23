import React, { useState } from "react";
import "./loginform.css";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

const LoginForm = ({ closeLoginForm, onUserLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSwitchForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4040/signup", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        alert("User signed up successfully!");
        onUserLogin(username); // Pass username to Navbar
        closeLoginForm(); // Close form after successful signup
      }
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.response?.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("There was an error signing up. Please try again.");
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:4040/signin", {
        email,
        password,
      });
  
      if (response.status === 200) {
        console.log("Response Data:", response.data); // Log the response to confirm structure
        alert("User signed in successfully!");
  
        const username = response.data.user.username || "Guest"; // Ensure you're getting the username correctly
        localStorage.setItem("authToken", response.data.token);
        onUserLogin(username); // Pass username to Navbar
        closeLoginForm();
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert(error.response?.data.message || "There was an error signing in. Please try again.");
    }
  };
  
  
  return (
    <div className="login-form-overlay">
      <div className="login-page">
        <div className="login-container">
          <div className="logo">
            <img src="https://via.placeholder.com/100x50?text=LeetCode" alt="Logo" />
          </div>
          <button onClick={closeLoginForm} className="close-button">X</button>
          
          {isSignUp ? (
            <form className="login-form" onSubmit={handleSignUp}>
              <h2>Sign Up</h2>
              <input
                type="text"
                placeholder="Username"
                className="login-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="login-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail Address"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="login-button">Sign Up</button>
              <div className="forgot-signup">
                <p>Already have an account? 
                  <a href="#" onClick={handleSwitchForm}>Sign In</a>
                </p>
              </div>
            </form>
          ) : (
            <form className="login-form" onSubmit={handleSignIn}>
              <h2>Sign In</h2>
              <input
                type="email"
                placeholder="Email Address"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="login-button">Sign In</button>
              <div className="forgot-signup">
                <a href="#">Forgot Password?</a>
                <a href="#" onClick={handleSwitchForm}>Sign Up</a>
              </div>
              <div className="social-login">
                <p>or you can sign in with</p>
                <div className="social-icons">
                  <FaGoogle size={30} className="google-icon" />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
