import Login from "./Login";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Sidebar from "./Sidebar";
import "./App.scss";

function App() {
  const [id, setId] = useLocalStorage("id");

  return <div>{id ? <Sidebar id={id} /> : <Login onIdSubmit={setId} />}</div>;
}

export default App;
