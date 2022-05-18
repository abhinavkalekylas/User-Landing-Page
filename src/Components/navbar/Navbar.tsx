import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import Modaldata from "../modal/Modaldata";
import { GenderType, StatusType } from "../../modalfunction/Modal";

const Navbar = () => {
  // user state to show/hide modal
  const [addUserModal, setAddUserModal] = useState(false);

  const closeModal = () => setAddUserModal(false);
  const openModal = () => setAddUserModal(true);
  return (
    <nav className="navbar navbar-dark">
      <a href="/" className="navbar-brand ">
        User Landing Page
      </a>

      <form className="nav_form form-inline">
        <select
          className="filter form-select form-select-lg"
          aria-label=".form-select-lg example"
        >
          <option value="none">None</option>
          <option value={StatusType.ACTIVE}>Active</option>
          <option value={StatusType.INACTIVE}>Inactive</option>
          <option value={GenderType.MALE}>Male</option>
          <option value={GenderType.FEMALE}>Female</option>
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
