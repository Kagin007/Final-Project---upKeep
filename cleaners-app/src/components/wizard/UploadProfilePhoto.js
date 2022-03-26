import React, {useState} from "react";
import {
  Grid,
  TextField,
  Avatar,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import axios from "axios"


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

export default function UploadProfilePhoto(props) {

  const sendUserData = () => {
  axios.post('/api/users', props.userData)
  .then(function (response) {
    props.increment()
    console.log("Success", response);
  })
  .catch(function (error) {
    console.log("Failure", error);
  });
  }

  const handleInput = (event) => {
    const newData = {...props.userData}
    newData[event.target.id] = event.target.value
    props.setUserData(newData)
    console.log(newData)
  };


  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <CleaningServicesIcon style={iconStyle} />
        </Avatar>
        <h1 style={companyName}>upKeeper</h1>

        <h3>Provide a photo of yourself!</h3>
        <DriveFolderUploadIcon style={iconStyle} />
        <TextField
          onChange={(event) => handleInput(event)}
          id="picture_url"
          value={props.userData.picture_url}
          label="Paste a link"
          variant="outlined"
          type="text"
          fullWidth
          required
          style={fieldStyle}
        />
      </Grid>
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
        onClick={sendUserData}
      >
        SUBMIT
      </Button>
      <Typography align="center">
        Already have an account?
        <Link href="/login">Sign in here.</Link>
      </Typography>
    </Grid>
  );
}
