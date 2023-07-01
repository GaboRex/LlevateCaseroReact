import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialValues } from "./storeReducer";

const ContextProvider = createContext();

const AppContext = ({ children }) => {
  return (
    <ContextProvider.Provider value={useReducer(storeReducer, initialValues)}>
      {children}
    </ContextProvider.Provider>
  );
};

const useStore = () => {
  return useContext(ContextProvider)[0];
};

const useDispatch = () => useContext(ContextProvider)[1];

export { ContextProvider, useStore, useDispatch };
export default AppContext;