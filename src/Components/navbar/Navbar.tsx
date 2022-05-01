import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import Modaldata from "../modal/Modaldata";
import { GenderType, StatusType } from "../../helperfunction/helperfuntion";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <nav className="navbar navbar-dark">
      <a href="/" className="navbar-brand ">
        User Landing Page
      </a>

      <form className="filter form-inline">
        <select
          className="form-select form-select-lg"
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
            onClick={handleShow}
          >
            Add User
          </Button>
        </div>
      </form>
      <Modaldata showModal={showModal} handleClose={handleClose} />
    </nav>
  );
};

export default Navbar;
