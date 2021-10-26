import React, { useState } from "react";
import { Tabs, Tab, Nav } from "react-bootstrap";
import { tabContenttt } from "./Sidebar.scss";
import Conversations from "./Conversations";
import Contacts from "./Contacts";

const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);

  return (
    <div className={"sidebar-size d-flex flex-column "}>
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
          <Tab.Pane eventKey={CONVERSATIONS_KEY} className={tabContenttt}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
