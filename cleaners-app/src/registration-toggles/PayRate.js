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
import { Input } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";

export default function CreateAccount() {
  const [values, setValues] = React.useState({
    amount: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const paperStyle = {
    padding: 20,
    height: "80vh",
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

          <h3>How much do you charge for your services?</h3>
        </Grid>
        <Box>
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Amount
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                value={values.amount}
                onChange={handleChange("amount")}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </div>
        </Box>
        <Button type="submit" fullWidth style={buttonStyle} color="primary">
          BACK
        </Button>
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
