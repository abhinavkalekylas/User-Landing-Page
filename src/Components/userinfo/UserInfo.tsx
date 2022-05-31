import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, FormGroup, Button } from "reactstrap";
import {
  GenderType,
  StatusType,
  User,
  validateEmail,
} from "../../modalfunction/Modal";
import postUser from "../adduser/postUser";
import putUser from "../edituser/putUser";

const UserInfo = ({
  userData,
  operation,
}: {
  userData: User;
  operation: string;
}) => {
  const navigate = useNavigate();

  const [userForm, setUserForm] = useState(userData);
  const [error, setError] = useState(false);

  useEffect(() => {
    setUserForm(userData);
  }, [userData]);

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
        operation === "add"
          ? await postUser(userForm)
          : await putUser(userForm);

        toast(`User ${operation}`, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // closeModal();
        navigate(0);
      } catch (error) {
        setError(true);
        toast.error(`Error while doing ${operation} operation`, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("Error while editing user ", error);
      }
    }
  };

  const resetForm = () => {
    setUserForm(userData);
  };

  return (
    <div className="edituser_container">
      {error ? (
        <h2>This page is under develop. We will sure give you an update</h2>
      ) : (
        <>
          <Form onSubmit={handleForm} className="form">
            <FormGroup>
              <div className="input input-group input-group-lg">
                <label className="edituser_label">Name :</label>
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
                <label className="edituser_label">Email :</label>
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
                <label className="edituser_label">Gender :</label>
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
                <label className="edituser_label">Status :</label>
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
                  className="edituser_btn btn_edit btn"
                  id="liveToastBtn"
                  color="success"
                  type="submit"
                >
                  Edit User
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

export default UserInfo;
