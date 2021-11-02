import React, { useState } from "react";
import { Tabs, Tab, Nav, Button, Modal } from "react-bootstrap";
import styles from "./Sidebar.module.scss";
import Conversations from "../Conversations";
import Contacts from "../Contacts";
import ConversationsModal from "../ConversationsModal/ConversationsModal";
import ContactsModal from "../ContactsModal/ContactsModal";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hideModal = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);

  return (
    <div className={`${styles.sidebarSize} d-flex flex-column`}>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav
          variant="tabs"
          className={"justify-content-center"}
          activeKey={activeKey}
        >
          <Nav.Item role="button">
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Chats</Nav.Link>
          </Nav.Item>
          <Nav.Item role="button">
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className={"border-end overflow-auto flex-grow-1"}>
          <Tab.Pane eventKey={CONVERSATIONS_KEY} className={styles.tabContent}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY} className={styles.tabContent}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <Button className="rounded-0" onClick={showModal}>
          New {activeKey === CONVERSATIONS_KEY ? "Conversation" : "Contact"}
        </Button>
        <div className="p-2 border-top border-end small">
          Your id: <span className="text-muted">{id}</span>
        </div>
      </Tab.Container>

      <Modal show={isModalOpen} onHide={hideModal}>
        {activeKey === CONVERSATIONS_KEY ? (
          <ConversationsModal hideModal={hideModal} />
        ) : (
          <ContactsModal hideModal={hideModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
