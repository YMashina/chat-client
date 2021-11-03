import Login from "../Login/Login";
import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Sidebar from "../Sidebar/Sidebar";
import "./App.module.scss";
import Dashboard from "../Dashboard/Dashboard";
import { ContactsProvider } from "../../contexts/ContactsProvider";
import { ConversationsProvider } from "../../contexts/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const contactsWrappedDashboard = (
    <ConversationsProvider>
      <ContactsProvider>
        <Dashboard id={id} />
      </ContactsProvider>
    </ConversationsProvider>
  );

  return (
    <div>{id ? contactsWrappedDashboard : <Login onIdSubmit={setId} />}</div>
  );
}

export default App;
