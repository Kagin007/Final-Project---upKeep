import React, { useState, useEffect } from "react";
import axios from "axios"
import "./Home.css";

export default function Home() {
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
      <button>Click for cleaners</button>
      <h2>User Names</h2>
      <div>
        {users.map((user, _) => {
          return (
            <div>
              {user.id}. {user.last_name}
            </div>
          );
        })}
      </div>
    </div>
  );
}