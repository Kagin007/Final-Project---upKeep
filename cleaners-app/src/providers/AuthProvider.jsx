import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = props => {
  const [user, setUser] = useState({});

  const providerData = { user, setUser };
  return (
    <AuthContext.Provider value={providerData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
