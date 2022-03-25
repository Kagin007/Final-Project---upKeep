import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Link,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { authContext } from "./providers/AuthProvider";
import axios from "axios";

// props from App.js useEffect
export default function Profile(props) {
  const { properties, memberData } = props;

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
            <h2>Profile</h2>
          </Typography>

          {/* this is equvalent to props && props.properties && props.properties[0] */}
          {/* props?.properties?.[0] ? */}

          <>
            <img
              className="user-photo"
              src={memberData.imgurl}
              alt="user_photo"
            />
            <Typography
              align="left"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              First Name:{memberData.user.first_name}
            </Typography>
            <Typography
              align="left"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Last Name: {memberData.user.last_name}
            </Typography>
            <Typography
              align="left"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Email: {memberData.user.email}
            </Typography>
            <Typography
              align="left"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Role: {memberData.role}
            </Typography>

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
          </>

          {/* <div className="center">
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
</div> */}
        </CardContent>
      </Paper>
    </Grid>
  );
}
