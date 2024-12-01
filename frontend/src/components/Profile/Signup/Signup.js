import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  const handleSignIn = () => {
    if (!username || !email || !password) {
      alert("Please fill all the fields");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters");
      return;
    }

    console.log("Sign In successful");
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    navigate("/dashboard");
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="header">Signup</div>

      <div className="inputs">
        <div className="input">
          <img src="/icons/user.svg" alt="user" />
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input">
          <img src="/icons/email.svg" alt="email" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src="/icons/password.svg" alt="password" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password-icon"
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer", marginLeft: "-20px" }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div className="forgot_pass">
        Forgot password? <span>Click here</span>
      </div>
      <div className="sub_container">
        <button className="submit_1" onClick={handleGoToLogin}>
          Go to Login
        </button>
        <button className="submit" onClick={handleSignIn}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignIn;
