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
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
          />
        </div>
      </Router>
    </>
  );
};

export default App;
