import React from "react";
import {
  Grid,
  Avatar,
  Typography,
  Link,
  Button,
  TextField,
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

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

export default function CreateAccount(props) {
  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <CleaningServicesIcon style={iconStyle} />
        </Avatar>
        <h1 style={companyName}>upKeeper</h1>

        <h3>Post your listing</h3>
      </Grid>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
        required
        style={fieldStyle}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        fullWidth
        required
        style={fieldStyle}
      />
      <TextField
        id="outlined-basic"
        label="Address"
        variant="outlined"
        fullWidth
        required
        style={fieldStyle}
      />
      <TextField
        id="outlined-basic"
        label="Upload a photo"
        variant="outlined"
        fullWidth
        required
        style={fieldStyle}
      />
 <Button
        type="submit"
        fullWidth
        style={buttonStyle}
        color="primary"
        onClick={props.decrement}
      >
        BACK
      </Button>
      <Button type="submit" fullWidth style={buttonStyle} color="primary" onClick={props.increment}>
        NEXT
      </Button>
      <Typography align="center">
        Already have an account?
        <Link href="/login">Sign in here.</Link>
      </Typography>
    </Grid>
  );
}
