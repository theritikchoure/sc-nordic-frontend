import React, { useState } from "react";
import "../styles/AlertsTable.css";
import { useEffect } from "react";
import { deleteAlert, fetchAlerts } from "../api/endpoints/alerts";

const dummyData = new Array(25).fill({
  name: "Test Alert",
  signal: "DK1",
  criteria: "Less Than",
  value: 0,
  email: "mb@scnordic.com",
  days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
});

function AlertsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [alerts, setAlerts] = useState([]);
  const itemsPerPage = 7;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let res = await fetchAlerts();
    setAlerts(res.data);
    console.log(res);
  };

  //   const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  //   const visibleData = dummyData.slice(
  //     (currentPage - 1) * itemsPerPage,
  //     currentPage * itemsPerPage
  //   );

  const handleDeleteAlert = async (id) => {
    try {
      await deleteAlert(id);
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="alerts-container">
      <div className="alerts-header">
        <div className="tab active">Alerts</div>
        <div className="tab">Triggered Alerts</div>
        <button className="refresh-btn" onClick={loadData}>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="table-wrapper">
        <table className="alerts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price Signal</th>
              <th>Criteria</th>
              <th>Value</th>
              <th>Email</th>
              <th>Active Days</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, idx) => (
              <tr key={idx} className={idx === 1 ? "highlight-row" : ""}>
                <td>
                  <strong>{alert.name}</strong>
                </td>
                <td>
                  <strong>{"DK-1"}</strong>
                </td>
                <td>{alert.criteria}</td>
                <td>
                  <strong>{alert.value}</strong>
                </td>
                <td>{alert.email}</td>
                <td>
                  <strong>{alert.days}</strong>
                </td>
                <td>
                  <button className="edit-btn">
                    <i className="fas fa-pen"></i>
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteAlert(alert._id)}
                  >
                    <i className="fas fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
          {"<"}
        </button>
        {[...Array(5).keys()].map((num) => (
          <button
            key={num + 1}
            className={currentPage === num + 1 ? "active" : ""}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage((p) => Math.min(p + 1, 5))}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default AlertsTable;
