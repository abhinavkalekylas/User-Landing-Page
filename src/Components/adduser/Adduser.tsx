import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Button } from "reactstrap";
import axios from "axios";
import "./Adduser.css";
import {
  User,
  GenderType,
  StatusType,
} from "../../helperfunction/helperfuntion";

const AddUser = ({ handleClose }: { handleClose: () => void }) => {
  const navigate = useNavigate();
  const userData: User = {
    id: 0,
    name: "",
    email: "",
    gender: GenderType.MALE,
    status: StatusType.ACTIVE,
  };

  // form for user data after click add user button
  const [userForm, setUserForm] = useState(userData);
  const [error, setError] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (userForm.name === "" || userForm.email === "") {
      return alert("Please enter required field");
    } else if (!validateEmail(userForm.email)) {
      return alert("Email is not valid");
    } else {
      try {
        const token =
          "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca";
        const res = await axios("https://gorest.co.in/public/v2/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: JSON.stringify(userForm),
        });
        navigate(0);
      } catch (error) {
        setError(true);
        console.log("Error while creating user ", error);
      }
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(email)) {
      return true;
    }
    return false;
  };

  const resetForm = () => {
    setUserForm(userData);
  };

  return (
    <div className="container">
      {error ? (
        <h2>This page is under develop. We will sure give you an update</h2>
      ) : (
        <>
          <Form onSubmit={handleForm} className="form">
            <FormGroup>
              <div className="input input-group input-group-lg">
                <label>Name :</label>
                <input
                  className="username form-control my-2"
                  placeholder="Enter username here"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={userForm.name}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input input-group input-group-lg">
                <label>Email :</label>
                <input
                  className="email form-control my-2"
                  placeholder="Enter email id here"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={userForm.email}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input input-group input-group-lg">
                <label>Gender :</label>
                <select
                  name="gender"
                  value={userForm.gender}
                  onChange={handleChange}
                  className="gender form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option value={GenderType.MALE}>Male</option>
                  <option value={GenderType.FEMALE}>Female</option>
                </select>
              </div>

              <div className="input input-group input-group-lg">
                <label>Status :</label>
                <select
                  name="status"
                  value={userForm.status}
                  onChange={handleChange}
                  className="status form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option value={StatusType.ACTIVE}>Active</option>
                  <option value={StatusType.INACTIVE}>Inactive</option>
                </select>
              </div>
              <div className="d-flex">
                <Button
                  className="btn_add"
                  color="success"
                  type="submit"
                  onClick={handleClose}
                >
                  Add User
                </Button>

                <Button
                  className="reset_add"
                  color="primary"
                  onClick={resetForm}
                >
                  Reset
                </Button>
              </div>
            </FormGroup>
          </Form>
        </>
      )}
    </div>
  );
};

export default AddUser;
