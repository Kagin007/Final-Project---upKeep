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
  
  // const submitHandler = e => {
  //   e.preventDefault();
  //   const date = e.target.date.value;
  //   const city = e.target.city.value;
  //   if(date && city){
  //     axios
  //     .get(`/api/users/${city.toLowerCase()}/${date}`)
  //     .then(res => {
  //       setCleaners(res.data);
  //       console.log(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   }
  //   else {
  //     alert('Please provide Location and Date for the Search.');
  //   }
   
  // };

  

  return (
    <Fragment>
      <nav className="nav__bar">
        <h1 className="nav__logo">upKeeper</h1>
      </nav>
      <ul className="nav__options">
        <NavLink to="/" className="nav__options--link">Home</NavLink>
        <NavLink to="/reservations" className="nav__options--link">My Reservations</NavLink>
        <NavLink to="/profile" className="nav__options--link">My Profile</NavLink>
        {!user && <li to="#" className="nav__options--link" onClick={toggleLogin}>Log In</li>}
        {!user && <li to="#" className="nav__options--link" onClick={toggleSignUpWizard}>Sign Up</li>}
        {user && <li className="nav__options--link">Logged in as: {`${user.username[0].toUpperCase()}${user.username.substring(1,user.username.length).toLowerCase()}`}</li>}
        {user && <li to="#" className="nav__options--link" onClick={()=>exit()}>Logout</li>}
      </ul>
      {signUpWizardOpen && <Backdrop onClose={toggleSignUpWizard} />}
      {signUpWizardOpen && <SignUpWizard onClose={toggleSignUpWizard} />}

      {loginOpen && <Backdrop onClose={toggleLogin} />}
      {loginOpen && <LoginModal onClose={toggleLogin} />}
    </Fragment>
  );
};
export default Navigation;
