import React from 'react';
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home"
import ChooseCity from "./registration-toggles/ChooseCity"
import CleanerProfile from "./registration-toggles/CleanerProfile"
import CreateAccount from "./registration-toggles/CreateAccount"
import IAmA from "./registration-toggles/IAmA"
import PayRate from "./registration-toggles/PayRate"
import PostListing from "./registration-toggles/PostListing"
import PropertyPosted from "./registration-toggles/PropertyPosted"
import UploadPhoto from "./registration-toggles/UploadPhoto"



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
        <Route exact path="/iama">
          <IAmA />
        </Route>
        <Route exact path="/createaccount">
          <CreateAccount />
        </Route>
         <Route exact path="/choosecity">
          <ChooseCity />
        </Route>
        <Route exact path="/payrate">
          <PayRate />
        </Route>
        <Route exact path="/uploadphoto">
          <UploadPhoto />
        </Route>
        <Route exact path="/cleanerprofile">
          <CleanerProfile />
        </Route>
        <Route exact path="/postlisting">
          <PostListing />
        </Route>
        <Route exact path="/propertyposted">
          <PropertyPosted />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
