import React from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import styles from "../ContactsModal/ContactsModal.module.scss";

const ConversationsModal = ({ hideModal }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    hideModal();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add new contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Enter the contact's id</Form.Label>
            <FormControl placeholder="ID" type="text" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter the contact's name</Form.Label>
            <FormControl placeholder="Name" type="text" required />
          </Form.Group>
          <div className={styles.formButtons}>
            <Button variant="secondary" onClick={hideModal}>
              Cancel
            </Button>
            <Button type={"submit"} variant="primary">
              Create
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
};

export default ConversationsModal;
