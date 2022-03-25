import React, { useState } from "react";
import { useHistory } from 'react-router'
import { Grid, Avatar, FormGroup, Typography, Link, Button, TextField} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import axios from "axios";



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



const storePayRate= async() => {
let formField = new FormData()
formField.append('payrate', payrate)


if(payrate !== "") {
  formField.append('payrate', payrate)
}

await axios({
  method: 'post',
  url: 'http://localhost:8000"/api/register',
  data: formField
}).then((response) => {
  console.log(response.data)
  history.push("/")
})
}



export default function PayRate(props) {
  const history = useHistory()
  const [payRate, setPayRate] = useState("");
  
  const onClickEvents = () => {
    props.increment,
    storePayRate()
  }

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

        <h3>How much do you charge for your services?</h3>
      </Grid>
      <FormGroup>  
      <TextField style={fieldStyle} 
      type="text"
      name="payrate"
      value={payrate}
      onChange={(e) => setPayRate(e.target.value)}
      label="Enter an hourly rate in Canadian dollars (no decimals)"  
      variant="outlined" 
      fullWidth 
      required 
      />
      </FormGroup> 
      <Button
        type="submit"
        fullWidth
        style={buttonStyle}
        color="primary"
        onClick={onClickEvents}
      >
        BACK
      </Button>
      <Button
        type="submit"
        fullWidth
        style={buttonStyle}
        color="primary"
        onClick={onClickEventsBack}
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

