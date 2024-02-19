import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const btnstyle = { margin: "9px 0" };
  const paperStyle = { padding: 20, width: 450, margin: "100px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e", width: 60, height: 60 };
  const marginTop = { marginTop: 5 };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon style={{ fontSize: 40 }} />
          </Avatar>
          <h2 style={headerStyle}>SignUp Form</h2>
          <div style={{ marginBottom: 20 }} />
          <Typography variant="caption">
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <div style={{ marginBottom: 20 }} />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="Enter your Name"
            fullWidth
            required
          />
          <div style={{ marginBottom: 20 }} />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            placeholder="Enter your E-mail"
            fullWidth
            required
          />
          <div style={{ marginBottom: 20 }} />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <div style={{ marginBottom: 20 }} />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter your Phone Number"
            fullWidth
            required
          />
          <div style={{ marginBottom: 20 }} />
          <TextField
          id="outlined-basic"
          label="Password"
          type="Password"
          variant="outlined"
          fullWidth
          required
        />
          <div style={{ marginBottom: 20 }} />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />

          <Link to="/login">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={btnstyle}
              fullWidth
            >
              Sign up
            </Button>
          </Link>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignupForm;
