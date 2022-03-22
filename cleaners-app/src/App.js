import React from "react";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Profile from "./CleanerProfile"

const profile = {
  firstName: 'Adam',
  lastName: 'Schulte',
  email: '123@hotmail.com',
  payrate: '123',
  joinedOn: '03-22-2022'
}

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile" >
          <Profile {...profile}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
