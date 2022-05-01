import React, { useEffect, useState } from "react";
import { Form, FormGroup, Button } from "reactstrap";
import axios from "axios";
import "./Adduser.css";
import {
  User,
  GenderType,
  StatusType,
} from "../../helperfunction/helperfuntion";

const AddUser = ({ handleClose }: { handleClose: any }) => {
  const docOne: User = {
    name: "",
    email: "",
    gender: GenderType.MALE,
    status: StatusType.ACTIVE,
  };
  const [userForm, setUserForm] = useState(docOne);

  //Todo
  // useEffect(() => {
  //   getAllUsers();
  // }, []);

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
    } else {
      try {
        console.log("User form", userForm);

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
        console.log(res);
      } catch (error) {
        console.log("Error while creating user ", error);
      }
    }
  };
  return (
    <div className="container">
      <Form onSubmit={handleForm} className="form">
        <FormGroup>
          <div className="input input-group input-group-lg">
            <label>Name :</label>
            <input
              className="form-control my-2"
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
              className="form-control my-2"
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
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option value={GenderType.MALE}>Male</option>
              <option value={GenderType.FEMALE}>Female</option>
            </select>
          </div>

          <div className="input input-group input-group-lg">
            <label>Status :</label>
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option value={StatusType.ACTIVE}>Active</option>
              <option value={StatusType.INACTIVE}>Inactive</option>
            </select>
          </div>
          <Button
            className="btn_add"
            color="success"
            type="submit"
            onClick={handleClose}
          >
            Add User
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddUser;
