import React from "react";
import { Grid, Avatar, Typography, Link, Button } from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import RecommendIcon from '@mui/icons-material/Recommend';


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



export default function CleanerComplete(props) {


  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <CleaningServicesIcon style={iconStyle} />
        </Avatar>
        <h1 style={companyName}>upKeeper</h1>
        <h1>Your profile has been created!</h1>
        <u>View it here</u>
      </Grid>

      <Button type="submit" fullWidth style={buttonStyle} color="primary" href="/">
        CLOSE
      </Button>
      <Typography align="center">
        Already have an account?
        <Link href="/login">Sign in here.</Link>
      </Typography>
    </Grid>
  );
}
