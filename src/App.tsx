import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import UserList from "./Components/userList/userList";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <UserList />
      </div>
    </Router>
  );
};

export default App;
