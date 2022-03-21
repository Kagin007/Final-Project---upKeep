import React from 'react';
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";



function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
         <Route exact path="/">
          <Home />
          <SearchForm /> 
           </Route> 
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
