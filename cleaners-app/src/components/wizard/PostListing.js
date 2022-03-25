import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Grid,
  Avatar,
  Typography,
  Link,
  Button,
  TextField,
  FormGroup
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
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
  backgroundColor: "white",
};

//POST REQUEST FUNCTIONALITY


const storeListingDetails = async () => {
  let formField = new FormData();
  formField.append("title", title);
  formField.append("description", description);
  formField.append("address", address);
  formField.append("picture_url", picture_url);

  if (title !== "") {
    formField.append("title", title);
  }

  if (description !== "") {
    formField.append("description", description);
  }

  if (address !== "") {
    formField.append("address", address);
  }

  if (picture_url !== null) {
    formField.append("picture_url", picture_url);
  }

  await axios({
    method: "post",
    url: 'http://localhost:8000"/api/register',
    data: formField,
  }).then((response) => {
    console.log(response.data);
    history.push("/");
  });
};



export default function PostListing(props) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [pictureURL, setPictureURL] = useState(null);


  const onClickEvents = () => {
    props.increment, storeListingDetails();
  };
  
  const onClickEventsBack = () => {
    props.decrement, storeListingDetails();
  };

  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <CleaningServicesIcon style={iconStyle} />
        </Avatar>
        <h1 style={companyName}>upKeeper</h1>

        <h3>Post your listing</h3>
      </Grid>
      <FormGroup>
        <TextField
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          fullWidth
          required
          style={fieldStyle}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          variant="outlined"
          fullWidth
          required
          style={fieldStyle}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          label="Address"
          variant="outlined"
          fullWidth
          required
          style={fieldStyle}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          type="text"
          name="picture_url"
          value={pictureURL}
          onChange={(e) => setPictureURL(e.target.files[0])}
          label="Upload a photo of your home"
          variant="outlined"
          fullWidth
          required
          style={fieldStyle}
        />
      </FormGroup>
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
