import { Fragment } from "react";
import { Link } from 'react-router-dom'
import useSignUpModal from "../hooks/useSignUpModal"
import useLoginModal from "../hooks/useLoginModal"
import Backdrop from "./Backddrop";
import SignUpWizard from "./SignUpWizard";
import LoginModal from "./LoginModal";
import useProfileModal from "../hooks/useProfileModal";
import OwnerProfileModal from "./OwnerProfileModal";

const Navigation = props => {

  const {
    signUpWizardOpen,
    toggleSignUpWizard,
  } = useSignUpModal();

  const {
    loginOpen,
    toggleLogin,
  } = useLoginModal();

  const {
    profileModalOpen,
    toggleProfileModal,
  } = useProfileModal();
  



  return (
    <Fragment>
      <nav className="nav__bar">
        <h1 className="nav__logo">upKeeper</h1>
      </nav>
      <ul className="nav__options">
        <Link to="#" className="nav__options--link">My Reservations</Link>
        <div to="#" className="nav__options--link" onClick={toggleProfileModal}>My Profile</div>
        <div to="/login" className="nav__options--link" onClick={toggleLogin}>Log In</div>
        <div to="/register" className="nav__options--link" onClick={toggleSignUpWizard}>Sign Up</div>
      </ul>
      {signUpWizardOpen && <Backdrop onClose={toggleSignUpWizard} />}
      {signUpWizardOpen && <SignUpWizard onClose={toggleSignUpWizard} />}

      {loginOpen && <Backdrop onClose={toggleLogin} />}
      {loginOpen && <LoginModal onClose={toggleLogin} />}

      {profileModalOpen && <Backdrop onClose={toggleProfileModal} />}
      {profileModalOpen && <OwnerProfileModal onClose={toggleProfileModal} />}
    </Fragment>
  );
};
export default Navigation;
