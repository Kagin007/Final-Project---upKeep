import { Fragment } from "react";
import { Link } from 'react-router-dom'

const Navigation = props => {
  return (
    <Fragment>
      <nav className="nav__bar">
        <h1 className="nav__logo">upKeeper</h1>
      </nav>
      <ul className="nav__options">
      <Link to="/" className="nav__options--link">Home</Link>
        <Link to="#" className="nav__options--link">My Reservations</Link>
        <Link to="/profile" className="nav__options--link">My Profile</Link>
        <Link to="/login" className="nav__options--link">Login</Link>
        <Link to="/register" className="nav__options--link">Sign Up</Link>
      </ul>
    </Fragment>
  );
};
export default Navigation;
