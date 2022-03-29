import { Fragment, useContext, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom'
import useSignUpModal from "../hooks/useSignUpModal"
import useLoginModal from "../hooks/useLoginModal"
import Backdrop from "./Backddrop";
import SignUpWizard from "./SignUpWizard";
import LoginModal from "./LoginModal";
import {authContext} from "../providers/AuthProvider";
import axios from "axios";

const Navigation = props => {

  const {user, logout, setUser} = useContext(authContext)

  const {
    signUpWizardOpen,
    toggleSignUpWizard,
  } = useSignUpModal();

  const {
    loginOpen,
    toggleLogin,
  } = useLoginModal();

  const exit = () => {
    axios
    .get('/api/logout')
    .then(()=>logout())
    .catch(err=>console.log(err))
  }

   useEffect(() =>{ 
    const loggedInUser = localStorage.getItem("user");
  
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log('found user', foundUser);
      setUser(foundUser);
    }},[]);
  
  const GetProfile = (user) => {
    useEffect(() => {
      if (!user) {
        console.log('Please login')
      } else {
          axios
          .get(`/api/properties/${user}`)
          .then(res => {
            console.log('get property details:', res.data);
          })
          .catch(err => {
            console.log(err);
          });
        }
      }      
    )}


    const navColour = {
      color: "#f3e9dd"
    }

  return (
    <Fragment>
      <nav className="nav__bar">
        <h1 className="nav__logo">upKeeper</h1>
      </nav>
      <ul className="nav__options">
        <NavLink to="/" className="nav__options--link" style={navColour}>Home</NavLink>
        <NavLink to="/reservations" className="nav__options--link" style={navColour}>My Reservations</NavLink>
        <NavLink to="/profile" className="nav__options--link" style={navColour}>My Profile</NavLink>
        {!user && <li to="#" className="nav__options--link" onClick={toggleLogin} style={navColour}>Log In</li>}
        {!user && <li to="#" className="nav__options--link" onClick={toggleSignUpWizard} style={navColour}>Sign Up</li>}
        {user && <li className="nav__options--link" style={navColour}>Logged in as: {`${user.username[0].toUpperCase()}${user.username.substring(1,user.username.length).toLowerCase()}`}</li>}
        {user && <li to="#" className="nav__options--link" onClick={()=>exit()} style={navColour}>Logout</li>}
      </ul>
      {signUpWizardOpen && <Backdrop onClose={toggleSignUpWizard} />}
      {signUpWizardOpen && <SignUpWizard onClose={toggleSignUpWizard} />}

      {loginOpen && <Backdrop onClose={toggleLogin} />}
      {loginOpen && <LoginModal onClose={toggleLogin} />}
    </Fragment>
  );
};

export default Navigation;
