import React, { useEffect, useState, useContext, createContext } from "react";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Profile from "./OwnerProfile";
import axios from "axios";
import ReservationCard from "./components/ReservationCard";
import AuthProvider from "./providers/AuthProvider";

const loggedIn = true

const LoginContext = createContext()

function App() {

  return (
    <AuthProvider>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reservations">
          <ReservationCard />
          <ReservationCard
            firstname="David"
            lastname="Smith"
            address="630 8 Ave SW #600, Calgary, AB T2P 1G6"
            date="May 1st, 2020"
            cleanerimgurl="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            propertyimgurl="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </Route>
        {<Route exact path="/profile">
            <Profile/>
        </Route>}
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
