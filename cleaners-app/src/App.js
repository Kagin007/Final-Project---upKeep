import React, { useEffect, useState, useContext, createContext } from "react";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Profile from "./OwnerProfile";
// import Properties from "./CreateProperty"
import axios from "axios";
import AuthProvider from "./providers/AuthProvider";
import ReservationsList from "./components/ReservationsList";


function App() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [properties, setProperties] = useState([]);
  const [memberData, setMemberData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        console.log("Please login");
      } else {
        axios
          .get(`/api/properties/${user.id}`)
          .then(res => {
            setProperties(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        axios
          .get(`/api/member/${user.id}`)
          .then(res => {
            setMemberData(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }, 400);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home properties={properties} />
          </Route>
          <Route exact path="/reservations">
            <ReservationsList />
          </Route>
          {/* <Route exact path="/properties">
            <Properties
              properties={properties}
              setProperties={setProperties}
              memberData={memberData}
            />
          </Route> */}
          <Route exact path="/profile">
            <Profile
              properties={properties}
              setProperties={setProperties}
              memberData={memberData}
            />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
