import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [rememberMe, setRememberMe] = useState(false); // Remember me toggle
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const [isLoading, setIsLoading] = useState(false); // Loading spinner

  const navigate = useNavigate();

  // Pre-fill email if "remember me" was previously selected
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = () => {
    setError(""); // Clear previous errors

    // Validation checks
    if (!email.includes("@") || email.trim() === "") {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true); // Show loading spinner

    // Simulate server delay
    setTimeout(() => {
      setIsLoading(false);

      // Retrieve stored email and password from localStorage
      const savedEmail = localStorage.getItem("email");
      const savedPassword = localStorage.getItem("password");

      // Check credentials
      if (email === savedEmail && password === savedPassword) {
        console.log("Login successful");

        // Save email for "remember me" if checked
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        navigate("/dashboard");
      } else {
        setError("Invalid login credentials. Please sign up first.");
      }
    }, 1500);
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <div className="login-inputs">
        <div className="login-input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input">
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

      <div className="remember-me">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe((prev) => !prev)}
        />
        <label>Remember Me</label>
      </div>

      {error && <p className="error-message">{error}</p>}

      {isLoading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}

export default Login;
