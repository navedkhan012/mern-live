import { Button, Modal } from "react-bootstrap";

function ModalPopUp(props) {
  return (
    <>
      <Modal
        show={props.handleShow}
        onHide={props.handleClose}
        size={props.size}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            {props.closeText ? props.closeText : "Close"}
          </Button>
          <Button variant="primary" onClick={props.handleSave}>
            {props.saveText ? props.saveText : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPopUp;