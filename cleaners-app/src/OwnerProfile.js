import React, {useEffect, useState} from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { authContext } from "./providers/AuthProvider";
import axios from 'axios'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// props from App.js useEffect
export default function Profile(props) {

  const user  = JSON.parse(window.localStorage.getItem('user'))

  const [properties, setProperties] = useState([])
  const [memberData, setMemberData] = useState({})

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


  useEffect(() => {
    setTimeout( () => {
      if (!user) {
        console.log('Please login')
      } else {
          axios
          .get(`/api/properties/${user.id}`)
          .then(res => {
            console.log("properyData:", res.data)
            setProperties(res.data);
            
          })
          .catch(err => {
            console.log(err);
          });
          axios
          .get(`/api/member/${user.id}`)
          .then(res => {
            console.log("memberData:", res.data)
            setMemberData(res.data);
            
          })
          .catch(err => {
            console.log(err);
          });
        }  
    }, 400)    
  }, []) 
  
    if (!memberData.user) {
      return (

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
      )
    }


  return (
    <div>
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <CardContent>
          <Avatar style={avatarStyle}>
            <CleaningServicesIcon />
          </Avatar> 
          <Typography align="center" variant="h5" component="div">
            <h2>
              {memberData.user.first_name}'s Profile
            </h2>
            
          </Typography>
           
          <>
            <img className="user-photo" src={memberData.imgurl} alt="user_photo" width="200" height="50" border-radius="50%"/>
            <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>User Information</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              First Name:{memberData.user.first_name}
            </Typography>
            <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Last Name: {memberData.user.last_name}
            </Typography>
            <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Email: {memberData.user.email}
            </Typography>
            <Typography align="left" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Role: {memberData.role}
            </Typography>
        </Typography>
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
        <Typography>
            <ul>
            {properties.map((property, index) => {
              return (
              <div>
                <h4>Property {index+1}</h4>
                <li>Address: {property.address}</li>
                <li>City: {property.city}</li>
                <h3>...</h3>           
              </div> 
              )
            })}
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>

          
          </>                  


        </CardContent>
      </Paper>
    </Grid>
    </div>
  );
}