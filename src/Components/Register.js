import React, { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Video from "./assets/video.mp4";
import "../App.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    select: "1",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onFinish = async () => {
    try {
      const response = await axios.post("https:localhost:4001/api/v1/auth/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      alert('saved successfully')
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onFinish();
          }}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "20px",
            borderRadius: "20px",
            color: "white",
            background: "rgba(255, 255, 255, 0.23)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(6.2px)",
            WebkitBackdropFilter: "blur(6.2px)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="name" sx={{ color: "white" }}>
              Name
            </InputLabel>
            <Input id="name" required onChange={handleInputChange} />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email" sx={{ color: "white" }}>
              Email
            </InputLabel>
            <Input id="email" type="email" required onChange={handleInputChange} />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="phoneNumber" sx={{ color: "white" }}>
              Phone Number
            </InputLabel>
            <Input id="phoneNumber" required onChange={handleInputChange} />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password" sx={{ color: "white" }}>
              Password
            </InputLabel>
            <Input id="password" type="password" required onChange={handleInputChange} />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="confirmPassword" sx={{ color: "white" }}>
              Confirm Password
            </InputLabel>
            <Input
              id="confirmPassword"
              type="password"
              required
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="select" sx={{ color: "white" }}>
              Select
            </InputLabel>
            <Select
              id="select"
              required
              onChange={handleInputChange}
              value={formData.select}
            >
              <MenuItem value="1">Level 1</MenuItem>
              <MenuItem value="2">Level 2</MenuItem>
              <MenuItem value="3">Level 3</MenuItem>
              <MenuItem value="4">Level 4</MenuItem>
            </Select>
          </FormControl>
          <Link to="/pay">
            <button type="submit">Submit</button>
          </Link>
          <Typography variant="body2" align="center" sx={{ marginTop: "10px" }}>
            <Link to="/login">Already have an account? Login</Link>
          </Typography>
        </form>
      </div>
    </Box>
  );
};

export default Register;
