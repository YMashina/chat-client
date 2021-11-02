import Login from "../Login/Login";
import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Sidebar from "../Sidebar/Sidebar";
import "./App.module.scss";
import Dashboard from "../Dashboard/Dashboard";
import { ContactsProvider } from "../../contexts/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const contactsWrappedDashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );

  return (
    <div>{id ? contactsWrappedDashboard : <Login onIdSubmit={setId} />}</div>
  );
}

export default App;
