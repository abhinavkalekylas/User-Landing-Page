import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Navbar.scss";
import Modaldata from "../modal/Modaldata";
import { GenderType, StatusType } from "../../modalfunction/Modal";
import { useDispatch } from "react-redux";
import { filterUser } from "../../redux/action/todo";

const Navbar = () => {
  // user state to show/hide modal
  const [addUserModal, setAddUserModal] = useState(false);

  const closeModal = () => setAddUserModal(false);
  const openModal = () => setAddUserModal(true);

  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    selectedGender: "",
    selectedStatus: "",
  });

  const handleChangeStatus = (e: {
    target: { name: string; value: string };
  }) => {
    setFilter((prevType) => ({
      ...prevType,
      selectedStatus: e.target.value,
    }));
  };

  const handleChangeGender = (e: {
    target: { name: string; value: string };
  }) => {
    setFilter((prevType) => ({
      ...prevType,
      selectedGender: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(filterUser(filter));
  }, [filter]);

  return (
    <nav className="navbar navbar-dark">
      <a href="/" className="navbar-brand ">
        User Landing Page
      </a>

      <form className="nav_form form-inline">
        <span className="filter_title">Filter by:</span>
        <select
          className="filter form-select form-select-lg gender_select"
          aria-label=".form-select-lg example"
          onChange={handleChangeGender}
        >
          <option value="">None</option>
          <option value={GenderType.MALE}>Male</option>
          <option value={GenderType.FEMALE}>Female</option>
        </select>
        <select
          className="filter form-select form-select-lg status_select"
          aria-label=".form-select-lg example"
          onChange={handleChangeStatus}
        >
          <option value="">None</option>
          <option value={StatusType.ACTIVE}>Active</option>
          <option value={StatusType.INACTIVE}>Inactive</option>
        </select>
        <div className="adduser">
          <Button
            color="success"
            className="btn_add btn btn-success btn-outline-light"
            onClick={openModal}
          >
            Add User
          </Button>
        </div>
      </form>
      <Modaldata addUserModal={addUserModal} closeModal={closeModal} />
    </nav>
  );
};

export default Navbar;
