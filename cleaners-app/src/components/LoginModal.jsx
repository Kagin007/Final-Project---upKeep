import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {
  Grid,
  Avatar,
  Typography,
  Link,
  Button,
  TextField,
} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import axios from "axios";

const LoginModal = props => {
  const { user, setUser } = useContext(AuthContext);
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

  const submitHandler = e => {
    e.preventDefault();
    console.log(e.target);
    axios
      .post(`/api/login`, { username: "adam", password: "adam" })
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <section className="modal">
      <header className="modal-header">
        <div onClick={props.onClose}>
          <i className="fa-solid fa-xmark modal-exit"></i>
        </div>

        <Grid>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <CleaningServicesIcon style={iconStyle} />
            </Avatar>
            <h1 style={companyName}>upKeeper</h1>

            <h3>Login</h3>
          </Grid>
          <form onSubmit={submitHandler}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              required
              style={fieldStyle}
              name="email"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              style={fieldStyle}
              name="password"
            />

            <Button
              type="submit"
              fullWidth
              style={buttonStyle}
              color="primary"
              onClick={props.increment}
            >
              SUMBIT
            </Button>
          </form>
          <Typography align="center">
            Don't yet have an account?
            <Link href="/#">Sign up here</Link>
          </Typography>
        </Grid>
      </header>
      <main className="modal-content"></main>
    </section>
  );
};

export default LoginModal;
