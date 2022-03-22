import React from "react";
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


export default function TEST(props) {
  const paperStyle = {
    padding: 20,
    width: 400,
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


  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <CardContent>
          <Avatar style={avatarStyle}>
            <CleaningServicesIcon />
          </Avatar> 
          <Typography align="center" variant="h5" component="div">
            <h2>
              Profile
            </h2>
            
          </Typography>
          <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            First Name: {props.firstName}
          </Typography>
          <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Last Name: {props.lastName}
          </Typography>
          <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Email: {props.email}
          </Typography>
          <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Pay Rate: {props.payrate}
          </Typography>
          <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Joined on: {props.joinedOn}
          </Typography>
         
          <ur>
            {props.properties.map((property, index) => {
              return (
              <div>
                <h4>Property {index+1}</h4>
                <li>Address: {property.address}</li>
                <li>City: {property.city}</li>
                <h>...</h>           
              </div> 
              )
            })}
          </ur>
        </CardContent>
      </Paper>
    </Grid>
  );
}