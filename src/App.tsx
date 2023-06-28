import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
    </AuthContextProvider>
  );
}

export default App;
