import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = localStorage.getItem("email");

    if (existingUser === email) {
      alert("User already exists. Please log in or use a different email.");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      alert("Registration Successful");
      navigate("/login");
    }
  };

  return (
    <Container maxWidth="sm" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
    }}>
      <div className="auth-form-container">
        <Typography variant="h4" align="center">
          RegisterPage
        </Typography>
        <form className="register-form" onSubmit={handleSubmit}>
          <TextField
            label="Your Full Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            margin="normal"
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            margin="normal"
            required
          />
          <Button style={{ marginTop: '20px' }} type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
        <Button
          className="link-btn"
          onClick={() => navigate("/login")}
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Already have an account? Login here.
        </Button>
      </div>
    </Container>
  );
};
