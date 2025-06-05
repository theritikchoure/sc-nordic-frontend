import React, { useState } from "react";
import "../App.css";
import "../styles/AppLayout.css";

function AppLayout({ children }) {
  //   const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="dashboard-container">
      <aside className={`sidebar`}>
        <div className="sidebar-header">
          <h2>Grid Manager 2.0</h2>
        </div>

        <div className="user-info">
                  <img src="/images/profile.jpg" />
                  <div>
                      
          <p>Hey, Jason</p>
          <span>User id: abc - 24</span>
                  </div>
        </div>

        <ul className="nav-menu">
          <li>
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </li>
          <li className="active" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <i class="fa-solid fa-key"></i> E3 Apps
            <ul className={`dropdown ${dropdownOpen ? "open" : ""}`}>
              <li className="sub-item">
                <i className="fas fa-bell"></i> Peak Shaving & Alert
              </li>
              <li className="sub-item">
                <i className="fas fa-wind"></i> Ventilation
              </li>
              <li className="sub-item">
                <i className="fas fa-snowflake"></i> Cooling
              </li>
              <li className="sub-item">
                <i className="fas fa-fire"></i> Heat Pump
              </li>
              <li className="sub-item">
                <i className="fas fa-car-battery"></i> EV Charging
              </li>
            </ul>
          </li>
        </ul>

        <ul className="nav-menu">
          <li>
            <i className="fas fa-bolt-lightning"></i> Demand Response
          </li>
          <li>
            <i className="fas fa-chart-line"></i> Insights
          </li>
          <li>
            <i className="fas fa-history"></i> Version History
          </li>
          <li>
            <i class="fa-solid fa-power-off"></i> Logout
          </li>
        </ul>
      </aside>

      <main className="main-wrapper">
        <div className="main-content">
          <div className="header">
            <h3>Peak Shaving & Alert</h3>
            <div className="">
              <span>Carlsberg Group</span>
              <div className="notification-wrapper">
                <i className="fa-regular fa-bell"></i>
                <span className="notification-count">2</span>
              </div>
            </div>
          </div>
          <div className="main-section">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
