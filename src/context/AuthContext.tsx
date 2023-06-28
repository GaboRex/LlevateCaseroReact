import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialValues } from "./AuthReducer";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useReducer(storeReducer, initialValues)}>
      {children}
    </AuthContext.Provider>
  );
};

const useStore = () => {
  return useContext(AuthContext)[0];
};

const useDispatch = () => useContext(AuthContext)[1];

export { AuthContext, useStore, useDispatch };
export default AuthContextProvider;