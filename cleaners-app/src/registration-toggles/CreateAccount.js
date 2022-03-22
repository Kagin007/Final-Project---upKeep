import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Link,
  Button,
  TextField
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";


export default function CreateAccount() {
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

  const fieldStyle = {
    margin: "20px auto"
   }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <CleaningServicesIcon style={iconStyle} />
          </Avatar>
          <h1 style={companyName}>upKeeper</h1>

          <h3>Create An Account</h3>
        </Grid>
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth required style={fieldStyle}/>
        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth required style={fieldStyle} />
        <TextField id="outlined-basic" label="Confirm Password" type="password" variant="outlined" fullWidth required style={fieldStyle} />

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
