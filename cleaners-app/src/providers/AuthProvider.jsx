import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = props => {
  const providerData = {};
  return (
    <AuthContext.Provider value={providerData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
