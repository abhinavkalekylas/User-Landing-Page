import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Button } from "reactstrap";
import axios from "axios";
import { token } from "../../modalfunction/Modal";
import "./Adduser.scss";
import {
  User,
  GenderType,
  StatusType,
  validateEmail,
} from "../../modalfunction/Modal";

const AddUser = ({ closeModal }: { closeModal: () => void }) => {
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

  const handleChange = (e: { target: { name: string; value: string } }) => {
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
        await axios("https://gorest.co.in/public/v2/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: JSON.stringify(userForm),
        });
        closeModal();
        navigate(0);
      } catch (error) {
        setError(true);
        console.log("Error while creating user ", error);
      }
    }
  };

  const resetForm = () => {
    setUserForm(userData);
  };

  return (
    <div className="adduser_container">
      {error ? (
        <h2>This page is under develop. We will sure give you an update</h2>
      ) : (
        <>
          <Form onSubmit={handleForm} className="form">
            <FormGroup>
              <div className="input input-group input-group-lg">
                <label className="adduser_label">Name :</label>
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
                <label className="adduser_label">Email :</label>
                <input
                  className="email form-control my-2"
                  placeholder="Enter email id here"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  onChange={handleChange}
                  type="text"
                  name="email"
                  value={userForm.email}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input input-group input-group-lg">
                <label className="adduser_label">Gender :</label>
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
                <label className="adduser_label">Status :</label>
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
                  className="adduser_btn btn_add"
                  color="success"
                  type="submit"
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
