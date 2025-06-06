import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AppSidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Redirect and refresh page
    window.location.href = "/login";
  };
  return (
    <aside className={`sidebar`}>
      <div className="sidebar-header">
        <h2>Grid Manager 2.0</h2>
      </div>

      <div className="user-info" id="user-summary">
        <img
          src="/images/profile.jpg"
          alt="User Profile"
          className="user-avatar"
        />
        <div className="user-details">
          <p className="user-greeting">Hey, Jason</p>
          <span className="user-id">User ID: abc - 24</span>
        </div>
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>

        <li className="active" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <i className="fa-solid fa-key"></i> E3 Apps
        </li>

        <ul className={`dropdown ${dropdownOpen ? "open" : ""}`}>
          <li className="sub-item">
            <Link to="/e3-apps/peak-shaving-and-alerts">
              <i className="fas fa-bell"></i> Peak Shaving & Alert
            </Link>
          </li>
          <li className="sub-item">
            <Link to="/e3-apps/ventilation">
              <i className="fas fa-wind"></i> Ventilation
            </Link>
          </li>
          <li className="sub-item">
            <Link to="/e3-apps/cooling">
              <i className="fas fa-snowflake"></i> Cooling
            </Link>
          </li>
          <li className="sub-item">
            <Link to="/e3-apps/heat-pump">
              <i className="fas fa-fire"></i> Heat Pump
            </Link>
          </li>
          <li className="sub-item">
            <Link to="/e3-apps/ev-charging">
              <i className="fas fa-car-battery"></i> EV Charging
            </Link>
          </li>
          <li className="sub-item">
            <Link to="/e3-apps/load-shifting">
              <i className="fas fa-car-battery"></i> Load Shifting
            </Link>
          </li>
        </ul>

        <li>
          <Link to="/demand-response">
            <i className="fas fa-bolt-lightning"></i> Demand Response
          </Link>
        </li>

        <li>
          <Link to="/insights">
            <i className="fas fa-chart-line"></i> Insights
          </Link>
        </li>

        <li>
          <Link to="/version-history">
            <i className="fas fa-history"></i> Version History
          </Link>
        </li>

        <li onClick={handleLogout}>
          <i className="fa-solid fa-power-off"></i> Logout
        </li>
      </ul>
    </aside>
  );
};

export default AppSidebar;
