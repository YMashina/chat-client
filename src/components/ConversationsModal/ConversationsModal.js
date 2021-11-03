import React, { useRef } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import styles from "../ContactsModal/ContactsModal.module.scss";
import { useConversations } from "../../contexts/ConversationsProvider";

const ConversationsModal = ({ hideModal }) => {
  const idRef = useRef();
  const { createConversation } = useConversations();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createConversation(idRef.current.value);
    hideModal();
  };

  const checkIfConversationRecipientsExist = () => {};

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add new conversation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <Form.Group>
            <Form.Label>Enter the contact's id</Form.Label>
            <FormControl ref={idRef} placeholder="ID" type="text" required />
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
