import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Profile from "./OwnerProfile";
import axios from 'axios';

const profile = {
  firstName: 'Adam',
  lastName: 'Schulte',
  email: '123@hotmail.com',
  payrate: '123',
  joinedOn: '03-22-2022',
  properties: [
    {
      address: '123 juniper st',
      city: 'York Dale'
    },
    {
      address: ' 321 rockwood road',
      city: 'Kitchener'
    },
    {
      address: ' 321 rockwood road',
      city: 'Kitchener'
    },
    {
      address: ' 321 rockwood road',
      city: 'Kitchener'
    }
  ]
}


function App() {

  const [user, setUser] = useState([]);

  useEffect(() =>
    axios.get('/api/v1/users/6')
      .then(function (response) {
        // console.log(response)
        setUser(response.data)
        
      })
      .catch(function(error) {
        console.log(error)
    }), []
)

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
          <Profile properties={user}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
