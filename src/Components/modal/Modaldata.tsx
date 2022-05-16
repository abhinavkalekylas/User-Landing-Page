import { Modal, Button } from "react-bootstrap";
import "./Modaldata.css";
import AddUserForm from "../adduser/Adduser";

function Modaldata({
  showModal,
  handleClose,
}: {
  showModal: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title text-black">Add User</Modal.Title>
      </Modal.Header>
      <AddUserForm handleClose={handleClose} />
      <Modal.Footer>
        <Button className="close_btn" variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modaldata;
