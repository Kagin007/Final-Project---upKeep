import React from "react";
import { Grid, Avatar, Typography, Link, Button, TextField} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";



export default function PayRate(props) {
  const avatarStyle = {
    backgroundColor: "#98b4aa",
    width: "100px",
    height: "100px",
  };

  const buttonStyle = {
    margin: "5px 0",
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

  const fieldStyle = {
    margin: "5px auto",
    backgroundColor: "white"
  };

  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <CleaningServicesIcon style={iconStyle} />
        </Avatar>
        <h1 style={companyName}>upKeeper</h1>

        <h3>How much do you charge for your services?</h3>
      </Grid>
      <div>  <TextField style={fieldStyle} id="outlined-basic" label="Enter an hourly rate in Canadian dollars (no decimals)"  variant="outlined" fullWidth required /></div>
      <Button
        type="submit"
        fullWidth
        style={buttonStyle}
        color="primary"
        onClick={props.decrement}
      >
        BACK
      </Button>
      <Button
        type="submit"
        fullWidth
        style={buttonStyle}
        color="primary"
        onClick={props.increment}
      >
        NEXT
      </Button>
      <Typography align="center">
        Already have an account?
        <Link href="/login">Sign in here.</Link>
      </Typography>
    </Grid>
  );
}
