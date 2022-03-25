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

// const profile = {
//   firstName: "Adam",
//   lastName: "Schulte",
//   email: "123@hotmail.com",
//   payrate: "123",
//   joinedOn: "03-22-2022",
//   properties: [
//     {
//       address: "123 juniper st",
//       city: "York Dale",
//     },
//     {
//       address: " 321 rockwood road",
//       city: "Kitchener",
//     },
//     {
//       address: " 321 rockwood road",
//       city: "Kitchener",
//     },
//     {
//       address: " 321 rockwood road",
//       city: "Kitchener",
//     },
//   ],
// };

const LoginContext = createContext();

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
            // console.log("properyData:", res.data);
            setProperties(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        axios
          .get(`/api/member/${user.id}`)
          .then(res => {
            // console.log("memberData:", res.data);
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
