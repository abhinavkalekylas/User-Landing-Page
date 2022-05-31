import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Components/navbar/Navbar";
import UserList from "./Components/userList/userList";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <UserList />
          <ToastContainer autoClose={8000} />
        </div>
      </Router>
    </>
  );
};

export default App;
