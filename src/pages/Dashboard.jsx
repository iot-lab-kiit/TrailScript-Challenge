import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Home from "../components/Home";
import Transaction from "../components/Transactions";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [current, setCurrent] = useState({ page: <Home />, id: 0 });

  const update = (n) => {
    switch (n) {
      case "home":
        setCurrent({ page: <Home />, id: 0 });
        break;
      case "trans":
        setCurrent({ page: <Transaction />, id: 1 });
        break;
      case "wallet":
      case "user":
      case "notifs":
        alert("Coming Soon");
        break;
      default:
        alert("Error");
        break;
    }
  };
  return (
    <div>
      <SideBar update={update} value={current.id} />
      <div className="dashboard-container">{current.page}</div>
    </div>
  );
}
