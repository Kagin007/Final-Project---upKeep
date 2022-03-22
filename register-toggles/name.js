import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Register() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "#98b4aa",
  };

  const buttonStyle = {
    margin: "10px 0",
    backgroundColor: "#98b4aa",
    color: "white",
  };

  const radioStyle = {
    justifyContent: "center",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <CleaningServicesIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <h3>I am a...</h3>
        </Grid>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          style={radioStyle}
        >
          
          <FormControlLabel
            value="cleaner"
            control={<Radio />}
            label="Cleaner"
          />
          <FormControlLabel
            value="homeowner"
            control={<Radio />}
            label="Home Owner"
          />
        </RadioGroup>

        <TextField
          label="First Name"
          placeholder="Your first name"
          fullWidth
          required
        />
        <TextField
          label="Last Name"
          placeholder="Your last name"
          fullWidth
          required
        />
        <TextField
          label="Email"
          placeholder="Enter email address"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Create password"
          type="password"
          fullWidth
          required
        />
        <TextField
          label="Confirm Password"
          placeholder="Confirm password"
          type="password"
          fullWidth
          required
        />
        <Button type="submit" style={buttonStyle} fullWidth color="primary">
          SIGN UP
        </Button>
        <Typography>
          Already have an account?
          <Link href="/login">Sign in here.</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
