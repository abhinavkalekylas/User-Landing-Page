import React from "react";
import AddUserForm from "../adduser/Adduser";
import { Modal, Button } from "react-bootstrap";

function Modaldata({ showModal, handleClose}: {showModal: boolean, handleClose: any} ) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-black">Add User</Modal.Title>
      </Modal.Header>
      {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
      <AddUserForm handleClose={handleClose} />
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modaldata;
