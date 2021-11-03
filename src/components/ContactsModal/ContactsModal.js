import React, { useRef } from "react";
import { Button, FormControl, Modal, Form } from "react-bootstrap";
import styles from "./ContactsModal.module.scss";
import { useContacts } from "../../contexts/ContactsProvider";

const ContactsModal = ({ hideModal }) => {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createContact(idRef.current.value, nameRef.current.value);
    hideModal();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add new contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <Form.Group>
            <Form.Label>Enter the contact's id</Form.Label>
            <FormControl ref={idRef} placeholder="ID" type="text" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter the contact's name</Form.Label>
            <FormControl
              ref={nameRef}
              placeholder="Name"
              type="text"
              required
            />
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

export default ContactsModal;
