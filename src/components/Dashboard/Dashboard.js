import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Dashboard.module.scss";

const Dashboard = ({ id }) => {
  return (
    <div className={`d-flex ${styles.dashboard}`}>
      <Sidebar id={id} />
    </div>
  );
};

export default Dashboard;
