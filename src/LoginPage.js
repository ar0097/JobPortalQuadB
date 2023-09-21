import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email === storedEmail && password === storedPassword && email !== "" && password !== "") {
      sessionStorage.setItem("email", email);
      navigate("/home");
    } else {
      alert("Enter proper credentials.");
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
          LoginPage
        </Typography>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <Button style={{ marginTop: '20px' }}  type="submit" variant="contained" color="primary" fullWidth>
            Log In
          </Button>
        </form>
        <Button
          className="link-btn"
          onClick={() => navigate("/register")}
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Don't have an account? Register here.
        </Button>
      </div>
    </Container>
  );
};
