import { Fragment } from "react";

const Navigation = props => {
  return (
    <Fragment>
      <nav className="nav__bar">
        <h1 className="nav__logo">upKeeper</h1>
      </nav>
      <ul className="nav__options">
        <li className="nav__options--link">My Reservations</li>
        <li className="nav__options--link">My Profile</li>
        <li className="nav__options--link">Login</li>
        <li className="nav__options--link">Sign Up</li>
      </ul>
    </Fragment>
  );
};
export default Navigation;
