import React from "react";
import "../App.css";
import "../styles/AppLayout.css";
import AppSidebar from "./AppSidebar";

function AppLayout({ children }) {
  return (
    <div className="dashboard-container">
      <AppSidebar />

      <main className="main-wrapper">
        <div className="main-content">
          <div className="main-section">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
