import { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform login process for the user & save authID, etc
  const login = function (username, id) {
    setAuth(true);
    setUser({ username, id });
    window.localStorage.setItem("user", JSON.stringify({ username, id }));
  };

  const logout = function () {
    setAuth(false);
    setUser(null);
    window.localStorage.clear();
  };

  // authContext will expose these items
  const userData = { auth, user, login, logout, setUser };

  // We can use this component to wrap any content we want to share this context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
}
