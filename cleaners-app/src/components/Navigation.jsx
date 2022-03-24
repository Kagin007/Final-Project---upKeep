import { Fragment } from "react";
import { Link, NavLink } from 'react-router-dom'
import useSignUpModal from "../hooks/useSignUpModal"
import useLoginModal from "../hooks/useLoginModal"
import Backdrop from "./Backddrop";
import SignUpWizard from "./SignUpWizard";
import LoginModal from "./LoginModal";

const Navigation = props => {

  const {
    signUpWizardOpen,
    toggleSignUpWizard,
  } = useSignUpModal();

  const {
    loginOpen,
    toggleLogin,
  } = useLoginModal();



  return (
    <Fragment>
      <nav className="nav__bar">
        <h1 className="nav__logo">upKeeper</h1>
      </nav>
      <ul className="nav__options">
        <NavLink to="/" className="nav__options--link">Home</NavLink>
        <NavLink to="/reservations" className="nav__options--link">My Reservations</NavLink>
        <NavLink to="/profile" className="nav__options--link">My Profile</NavLink>
        <li to="#" className="nav__options--link" onClick={toggleLogin}>Log In</li>
        <li to="#" className="nav__options--link" onClick={toggleSignUpWizard}>Sign Up</li>
      </ul>
      {signUpWizardOpen && <Backdrop onClose={toggleSignUpWizard} />}
      {signUpWizardOpen && <SignUpWizard onClose={toggleSignUpWizard} />}

      {loginOpen && <Backdrop onClose={toggleLogin} />}
      {loginOpen && <LoginModal onClose={toggleLogin} />}
    </Fragment>
  );
};
export default Navigation;
