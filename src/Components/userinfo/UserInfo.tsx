import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, FormGroup, Button } from "reactstrap";
import "./UserInfo.scss";
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
  closeModal,
}: {
  userData: User;
  operation: string;
  closeModal: () => void;
}) => {
  const navigate = useNavigate();

  const [userForm, setUserForm] = useState(userData);
  const [error, setError] = useState(false);

  useEffect(() => {
    setUserForm(userData);
  }, []);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (userForm.name === "" || userForm.email === "") {
      toast.warn("Please enter given field", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!validateEmail(userForm.email)) {
      toast.warn("Invalid email entered", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      try {
        operation === "add"
          ? await postUser(userForm)
          : await putUser(userForm);

        toast.success(`User ${operation}`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        closeModal();
        setTimeout(() => {
          navigate(0);
        }, 1500);
      } catch (error) {
        setError(true);
        toast.error(`Error while doing ${operation} operation`, {
          position: "top-right",
          autoClose: 1500,
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
    <div className="userinfo_container">
      {error ? (
        <h2>This page is under develop. We will sure give you an update</h2>
      ) : (
        <>
          <Form onSubmit={handleForm} className="form">
            <FormGroup>
              <div className="input input-group input-group-lg">
                <label className="userinfo_label">Name :</label>
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
                <label className="userinfo_label">Email :</label>
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
                <label className="userinfo_label">Gender :</label>
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
                <label className="userinfo_label">Status :</label>
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
                <Button className="userinfo_btn" color="success" type="submit">
                  {operation} User
                </Button>

                <Button
                  className="reset_btn"
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
