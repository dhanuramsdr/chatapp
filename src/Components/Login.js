import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Dashboard from "./Dashboard";
import Video from "./assets/video.mp4"
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("localhost:4001/api/v1/auth/signin", { email, password })
      .then((response) => {
        if (response && response.data && response.data.token) {
          // Store the token in local storage
          localStorage.setItem("token", response.data.token);
          
          setLoggedIn(true);
          console.log(response);
          alert("Login successful");


          //username: 'kminchell  e',
          //password: '0lelplR',
          // Redirect to Dashboard
          navigate("/chat");
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
          <h2>Welcome</h2>
          <Link to="/"><button className="round" >Log out</button></Link>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <label>
            email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

