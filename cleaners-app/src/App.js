import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Profile from "./OwnerProfile";
import axios from "axios";
import CleanersList from "./components/CleanersList";
import CleanerCard from "./components/CleanerCard";

const profile = {
  firstName: "Adam",
  lastName: "Schulte",
  email: "123@hotmail.com",
  payrate: "123",
  joinedOn: "03-22-2022",
  properties: [
    {
      address: "123 juniper st",
      city: "York Dale",
    },
    {
      address: " 321 rockwood road",
      city: "Kitchener",
    },
    {
      address: " 321 rockwood road",
      city: "Kitchener",
    },
    {
      address: " 321 rockwood road",
      city: "Kitchener",
    },
  ],
};

function App() {
  const [user, setUser] = useState([]);

  useEffect(
    () =>
      axios
        .get("/api/v1/users/6")
        .then(function (response) {
          // console.log(response)
          setUser(response.data);
        })
        .catch(function (error) {
          console.log(error);
        }),
    []
  );

  const [query, setQuery] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    const date = e.target.date.value;
    const city = e.target.city.value;
    axios
      .get(`/api/v1/users?city=${city}&date=${date}`)
      .then(res => {
        setQuery(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  if (!query) return null;

  const test = query.map(cleaner => (
    <CleanerCard key={cleaner.cleanerid} {...cleaner} />
  ));

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home submitHandler={submitHandler} />
          {test}
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile properties={user} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
