import { Fragment } from "react";
import { Link } from 'react-router-dom'
import useSignUpModal from "../hooks/useSignUpModal"
import useLoginModal from "../hooks/useLoginModal"
import Backdrop from "./Backddrop";
import SignUpWizard from "./SignUpWizard";

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
        <Link to="#" className="nav__options--link">My Reservations</Link>
        <Link to="#" className="nav__options--link">My Profile</Link>
        <div to="/login" className="nav__options--link" onClick={toggleLogin}>Log In</div>
        <div to="/register" className="nav__options--link" onClick={toggleSignUpWizard}>Sign Up</div>
      </ul>
      {signUpWizardOpen && <Backdrop onClose={toggleSignUpWizard} />}
      {signUpWizardOpen && <SignUpWizard onClose={toggleSignUpWizard} />}

      {loginOpen && <Backdrop onClose={toggleSignUpWizard} />}
      {loginOpen && <SignUpWizard onClose={toggleSignUpWizard} />}
    </Fragment>
  );
};
export default Navigation;
