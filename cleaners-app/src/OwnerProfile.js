import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Link,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  FormControl,
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { authContext } from "./providers/AuthProvider";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreatePropertyListing from "./components/wizard/CreatePropertyListing";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { getCookie } from "./components/CSRFtoken";

// props from App.js useEffect
export default function Profile(props) {
  // const { properties, memberData } = props;

  const user = JSON.parse(window.localStorage.getItem("user"));

  const [properties, setProperties] = useState([]);
  const [memberData, setMemberData] = useState({});

  const [newProperty, setNewProperty] = useState({
    address: "",
    city: "",
    country: "Canada",
    imgurl: "",
    longitude: 0,
    latitude: 0,
    member_id: user.id,
  });

  const sendPropertyData = () => {
    const token = getCookie("csrftoken");
    axios
      .post(`/api/properties/${user.id}`, newProperty, {
        headers: { "X-CSRFToken": token },
      })
      .then(res => {
        console.log("Success", res.data);
      })
      .catch(err => {
        console.log("Failure", err);
      });
  };

  const handleInput = event => {
    const newData = { ...newProperty };
    newData[event.target.id] = event.target.value;
    setNewProperty(newData);
    console.log(newProperty);
  };

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        console.log("Please login");
      } else {
        axios
          .get(`/api/properties/${user.id}`)
          .then(res => {
            console.log("properyData:", res.data);
            setProperties(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        axios
          .get(`/api/member/${user.id}`)
          .then(res => {
            console.log("memberData:", res.data);
            setMemberData(res.data);
            // setPropertyData({...property})
          })
          .catch(err => {
            console.log(err);
          });
      }
    }, 400);
  }, []);

  const paperStyle = {
    padding: 20,
    width: "70rem",
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

  if (!memberData.user) {
    return (
      <div className="center">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    );
  }

  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <CardContent>
          <Avatar style={avatarStyle}>
            <CleaningServicesIcon />
          </Avatar>
          <Typography align="center" variant="h5" component="div">
            <h2>{memberData.user.first_name}'s Profile</h2>
          </Typography>
          <>
            <img
              className="user-photo profile-pic"
              src={memberData.imgurl}
              alt="user_photo"
              width="300"
              height="300"
            />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>User Info</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  align="left"
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  First Name:{memberData.user.first_name}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  align="left"
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Last Name: {memberData.user.last_name}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  align="left"
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Email: {memberData.user.email}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography
                  align="left"
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Role: {memberData.role}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panella-content"
                id="panel1a-header"
              >
                <Typography>Add Property</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid>
                  <Grid align="center">
                    <Avatar style={avatarStyle}>
                      <CleaningServicesIcon style={iconStyle} />
                    </Avatar>
                    <h1 style={companyName}>upKeeper</h1>
                    <h3>Post your listing</h3>
                  </Grid>

                  <TextField
                    onChange={event => handleInput(event)}
                    id="address"
                    value={newProperty.address}
                    label="Address"
                    variant="outlined"
                    fullWidth
                    required
                    style={fieldStyle}
                  />
                  <TextField
                    onChange={event => handleInput(event)}
                    id="city"
                    value={newProperty.city}
                    label="City"
                    variant="outlined"
                    fullWidth
                    required
                    style={fieldStyle}
                  />
                  <TextField
                    onChange={event => handleInput(event)}
                    id="imgurl"
                    value={newProperty.imgurl}
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
                    onClick={sendPropertyData}
                  >
                    SUBMIT
                  </Button>
                  <Typography align="center">
                    Already have an account?
                    <Link href="/login">Sign in here.</Link>
                  </Typography>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Properties</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {properties.map((property, index) => {
                    return (
                      <div>
                        <h4>Property {index + 1}</h4>
                        <li>Address: {property.address}</li>
                        <li>City: {property.city}</li>
                        <h3>...</h3>
                      </div>
                    );
                  })}
                </ul>
              </AccordionDetails>
            </Accordion>
          </>
        </CardContent>
      </Paper>
    </Grid>
  );
}
