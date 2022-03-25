import React, { useState } from "react";

import {
  Grid,
  TextField,
  Avatar,
  Typography,
  Link,
  Button,
  FormGroup
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import axios from "axios";

//STYLES
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


//POST REQUEST FUNCTIONALITY
const storePhoto= async(picture_url) => {
let formField = new FormData();

if (picture_url !== null) {
  formField.append("picture_url", picture_url);
}

return axios({
  method: "post",
  url: 'http://localhost:8000"/api/register',
  data: formField,
}).then((response) => {
  console.log(response.data);
 
});
}

export default function UploadPhoto(props) {
 
  const [pictureURL, setPictureURL] = useState(null);

  const onClickEvents = () => {
    props.increment()
    upload()
    };
  
  const upload = () => {
    pictureURL && storePhoto(pictureURL)
    .then(() => {
      setPictureURL(null)
    });

  }
  const onClickEventsBack = () => {
    props.decrement()
    upload();
  };
//if user goes back, no way to upload twice
//
  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <CleaningServicesIcon style={iconStyle} />
        </Avatar>
        <h1 style={companyName}>upKeeper</h1>

        <h3>Provide a photo of yourself!</h3>
        <DriveFolderUploadIcon style={iconStyle} />
        <FormGroup>
        <TextField
         type="text"
         name="picture_url"
         value={pictureURL}
         onChange={(e) => setPictureURL(e.target.files[0])}
          label="Paste a URL link"
          variant="outlined"
          fullWidth
          required
          style={fieldStyle}
        />
        </FormGroup>
      </Grid>
      <Button
        type="submit"
        fullWidth
        style={buttonStyle}
        color="primary"
        onClick={onClickEventsBack}
      >
        BACK
      </Button>
      <Button
        type="submit"
        fullWidth
        style={buttonStyle}
        color="primary"
        onClick={onClickEvents}

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
