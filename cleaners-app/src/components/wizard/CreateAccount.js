import React, { useState } from "react";
import { useHistory } from 'react-router'
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

import {
  Grid,
  Avatar,
  Typography,
  Link,
  Button,
  TextField,
  FormGroup,
} from "@material-ui/core";

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

const history = useHistory()

const storeUserDetails= async() => {
let formField = new FormDataEvent()
formField.append('email', email)
formField.append('password', password)

if(email !== "") {
  formField.append('email', email)
}

await axios({
  method: 'post',
  url: 'http://localhost:8080"/api',
  data: formField
}).then((respone) => {
  console.log(response.data)
  history.push("/")
})
}

const onClickEvents = () => {
  props.increment,
  storeUserDetails()
}

export default function CreateAccount(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid>
      <Grid align="center">
        <Avatar style={avatarStyle}>
          <CleaningServicesIcon style={iconStyle} />
        </Avatar>
        <h1 style={companyName}>upKeeper</h1>

        <h3>Create An Account</h3>
      </Grid>
      <FormGroup>
        <TextField
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth
          required
          style={fieldStyle}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth
          required
          style={fieldStyle}
        />
      </FormGroup>
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          type="password"
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
        onClick={props.decrement}
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
