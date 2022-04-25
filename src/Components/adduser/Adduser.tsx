import React, { useState } from "react";
import { Form, FormGroup, Button } from "reactstrap";
import axios from "axios";
import "./Adduser.css"

const AddUser = ({handleClose}: {handleClose: any}) => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    gender: "male",
    status: "active",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e: { preventDefault: () => void; }) => {
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
      <Form onSubmit={handleForm} className="form" autoComplete="off">
        <FormGroup>
          <label>Name :</label>
          <input
            className="my-2"
            onChange={handleChange}
            // label="name"
            type="text"
            name="name"
            value={userForm.name}
            required
          />
          <label>Email :</label>
          <input
            className="my-2"
            onChange={handleChange}
            // label="email"
            type="email"
            name="email"
            value={userForm.email}
            required
          />
          <label>Gender:</label>
          <select
            className="statusChoice"
            name="gender"
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />

          <label>Current status:</label>
          <select
            className="statusChoice"
            name="status"
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </FormGroup>

        {/* <FormGroup>
          <Input
            className="my-2"
            onChange={handleChange}
            label="gender"
            type="text"
            name="gender"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="my-2"
            onChange={handleChange}
            label="status"
            type="text"
            name="status"
            required
          />
        </FormGroup> */}
        <Button className="my-2" type="submit" onClick={handleClose}>
          Add new user
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
