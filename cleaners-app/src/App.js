import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navigation from "./components/Navigation";
import SearchForm from "./components/SearchForm";
import CleanerCard from "./components/CleanerCard";


function App() {
  const backend_url = "http://127.0.0.1:3000/api/v1/users";

  useEffect(() => {
    axios
      .get(backend_url)
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <Navigation />
      <SearchForm />
      <CleanerCard imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU" />
    </div>
  );
}

export default App;
