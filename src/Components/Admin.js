import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Dashboard from "./Dashboard";
import Video from "./assets/video.mp4"
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("https://dummyjson.com/auth/login", { username, password })
      .then((response) => {
        if (response) {
          setLoggedIn(true);
          console.log(response);
          alert("login successfully");

          //username: 'kminchelle',
          //password: '0lelplR',
          // Redirect to Dashboard
          navigate("/dashboard");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error during authentication:", error);
        alert("An error occurred during authentication. Please try again.");
      });
  };

  return (
    <div className="login">
      <video
      autoPlay
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1, // Ensure it stays behind other elements
      }}
    >
      {/* Provide the path to your video file */}
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      {loggedIn ? (
        <div className="welcome">
          <h2>Welcome, {username}!</h2>
          <Link to="/"><button className="round" >Log out</button></Link>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button onClick={handleLogin}>Login</button>
          <Link to="/">Create a new account? Subscribe</Link>
        </div>
      )}
    </div>
  );
};

export default Login;

