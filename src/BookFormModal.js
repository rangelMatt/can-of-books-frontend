import { Component } from "react";
import { Form, Button, Modal, ModalDialog, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

class BookFormModal extends Component {

  render() {
    
    return (
      <Modal show={this.props.displayForm} onHide={this.props.handleClose}>
        <ModalDialog>
          <ModalHeader closeButton="true">Add book!</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.props.postBook}>
              <Form.Group controlId="title">
                <Form.Control placeholder="title"/>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Control placeholder="description"/>
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Control placeholder="status"/>
              </Form.Group>
              <Button type="submit">BUTTON!</Button>
            </Form>
          </ModalBody>
        </ModalDialog>
      </Modal>
    );
  };
}

export default BookFormModal;