import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function IAmA() {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 600,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "#98b4aa",
    width: "100px",
    height: "100px",
  };

  const buttonStyle = {
    margin: "25px 0",
    backgroundColor: "#98b4aa",
    color: "white",

  };

  const radioStyle = {
    justifyContent: "center",
  };

  const iconStyle = {
    fontSize: "50px",
  };

  const companyName = {
    fontFamily: "Julius Sans One",
    justifyContent: "center",
    color: "#495371",
    fontSize: "50px",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <CleaningServicesIcon style={iconStyle} />
          </Avatar>
          <h1 style={companyName}>upKeeper</h1>

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
        <Button type="submit" fullWidth style={buttonStyle} color="primary">
          NEXT
        </Button>
        <Typography align="center">
          Already have an account?
          <Link href="/login">Sign in here.</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
