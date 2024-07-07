import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const headerStyle = { margin: 0 };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 450,
    margin: "100px auto",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
  };

  const avatarStyle = { backgroundColor: "#1bbd7e", width: 80, height: 80 };
  const btnstyle = { margin: "9px 0" };
  const gridStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph")',
    backgroundSize: 'cover',
    height: '100vh',
    padding: 20
  };

  return (
    <Grid container style={gridStyle} alignItems="center" justify="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon style={{ fontSize: 40 }} />
          </Avatar>
          <h1 style={headerStyle}>Login Form</h1>
          <div style={{ marginBottom: 20 }} />
          <h2>
            Welcome to<br />Stock Management System
          </h2>
        </Grid>
        <div style={{ marginBottom: 20 }} />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          fullWidth
          required
        />
        <div style={{ marginBottom: 20 }} />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
        />
        <div style={{ marginBottom: 20 }} />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <div style={{ marginBottom: 20 }} />
        <Typography>
          <Link to="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link to='/'>Sign Up</Link>
        </Typography>
        <div style={{ marginBottom: 20 }} />
        <Link to='/home'>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </Link>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
