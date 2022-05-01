import { Modal, Button } from "react-bootstrap";
import "./Modaldata.css";
import AddUserForm from "../adduser/Adduser";

function Modaldata({
  showModal,
  handleClose,
}: {
  showModal: boolean;
  handleClose: any;
}) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title text-black">Add User</Modal.Title>
      </Modal.Header>
      <AddUserForm handleClose={handleClose} />
      <Modal.Footer>
        <Button color="info" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modaldata;
