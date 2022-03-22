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


export default function Profile(props) {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
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
            Profile
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
          <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          </Typography>        
        </CardContent>
      </Paper>
    </Grid>
  );
}