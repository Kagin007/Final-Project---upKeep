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

// props from App.js useEffect
export default function Profile(props) {
  const paperStyle = {
    padding: 20,
    width: '70rem',
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

          {/* this is equvalent to props && props.properties && props.properties[0] */}
          {props?.properties?.[0] ? (
          <>
            <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              First Name: {props.properties[0].first_name}
            </Typography>
            <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Last Name: {props.properties[0].last_name}
            </Typography>
            <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Email: {props.properties[0].email}
            </Typography>
            <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Joined on: {props.properties[0].date_joined}
            </Typography>

            <ul>
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
          </ul>
          
          </> )
            : 

<div class="center">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>

}

                   


        </CardContent>
      </Paper>
    </Grid>
  );
}