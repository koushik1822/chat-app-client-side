import axios from "axios";
import "./App.css";
import Register from "./components/Register/Register";
import { UserContextProvider } from "./components/UserContext/UserContext";

function App() {
  axios.defaults.baseURL = "http://localhost:8080/api/v1/user";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Register></Register>
    </UserContextProvider>
  );
}

export default App;
